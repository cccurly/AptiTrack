"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import type { TestResult } from "@/lib/types";
import { CheckCircle, XCircle, Clock, Target, Award, Home } from "lucide-react";
import { formatTime } from "@/lib/utils";
import Confetti from "@/components/Confetti";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResultPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const latestResultId = localStorage.getItem("aptiTrack-latestResultId");
      const history: TestResult[] = JSON.parse(localStorage.getItem("aptiTrack-history") || "[]");
      const currentResult = history.find(r => r.id === latestResultId);

      if (currentResult) {
        setResult(currentResult);
      } else if (history.length > 0) {
        setResult(history[0]);
      } else {
        router.replace("/dashboard");
      }
    } catch(e) {
      router.replace("/dashboard");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (authLoading || loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-8 w-1/3 mb-8" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
          <Skeleton className="h-64" />
        </main>
      </div>
    );
  }

  if (!result) {
    // This state should ideally not be reached due to the redirect
    return null;
  }

  const wrongAnswers = result.total - result.score;
  const accuracy = result.total > 0 ? (result.score / result.total) * 100 : 0;
  const isPass = accuracy >= 50;

  return (
    <div className="flex flex-col min-h-screen">
      {isPass && <Confetti />}
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
          <div className="text-center mb-8">
            <Award className={cn("mx-auto h-16 w-16 mb-4", isPass ? 'text-primary' : 'text-destructive')} />
            <h1 className="text-4xl font-headline font-bold">{isPass ? "Congratulations!" : "Keep Practicing!"}</h1>
            <p className="text-muted-foreground mt-2">You have completed the {result.categoryName} test.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{result.score} / {result.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{result.score}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wrong Answers</CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{wrongAnswers}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time Taken</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(result.timeTaken)}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Review Your Answers</CardTitle>
              <CardDescription>Check your answers and learn from the explanations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {result.questions.map((q, index) => {
                  const userAnswer = result.answers[q.id];
                  const isCorrect = userAnswer === q.answer;
                  return (
                    <div key={q.id} className="border-b pb-6 last:border-b-0">
                      <p className="font-semibold mb-2">Q{index+1}: {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map(option => {
                          const isUserAnswer = option === userAnswer;
                          const isCorrectAnswer = option === q.answer;
                          let stateClass = "";
                          if(isCorrectAnswer) stateClass = "bg-green-100 dark:bg-green-900/30 border-green-500";
                          if(isUserAnswer && !isCorrect) stateClass = "bg-red-100 dark:bg-red-900/30 border-red-500";
                          
                          return (
                            <div key={option} className={cn("flex items-center gap-3 p-2 rounded-md border", stateClass)}>
                              {isCorrectAnswer ? <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> : isUserAnswer ? <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" /> : <div className="h-5 w-5" />}
                              <span>{option}</span>
                            </div>
                          );
                        })}
                      </div>
                      {!isCorrect && userAnswer && (
                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                           <p className="font-semibold text-sm text-accent">Explanation:</p>
                           <p className="text-sm text-muted-foreground">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <Button asChild>
                <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" /> Go to Dashboard
                </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
