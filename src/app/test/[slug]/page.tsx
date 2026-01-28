"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CATEGORIES } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft, ArrowRight, Timer, Loader2 } from "lucide-react";
import { formatTime } from "@/lib/utils";
import type { TestResult } from "@/lib/types";

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const { user, loading: authLoading } = useAuth();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [showExitAlert, setShowExitAlert] = useState(false);

  const category = useMemo(
    () => CATEGORIES.find((cat) => cat.id === params.slug),
    [params.slug]
  );
  
  useEffect(() => {
    if (category) {
      const durationInSeconds = category.duration * 60;
      setTimeLeft(durationInSeconds);
      setStartTime(Date.now());
    }
  }, [category]);
  
  useEffect(() => {
    if (timeLeft <= 0 && category) {
      if (startTime > 0) { // check if timer has started
        handleSubmit();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, category, startTime]);


  const handleSubmit = useCallback(() => {
    if (!category) return;
    const timeTaken = Math.round((Date.now() - startTime) / 1000);

    let score = 0;
    category.questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    const result: TestResult = {
      id: `res_${Date.now()}`,
      categoryId: category.id,
      categoryName: category.name,
      score,
      total: category.questions.length,
      timeTaken,
      date: new Date().toISOString(),
      answers,
      questions: category.questions,
    };
    
    try {
      const history = JSON.parse(localStorage.getItem("aptiTrack-history") || "[]");
      history.unshift(result);
      localStorage.setItem("aptiTrack-history", JSON.stringify(history));
      localStorage.setItem("aptiTrack-latestResultId", result.id);
      router.push("/result");
    } catch (e) {
      console.error("Failed to save result", e);
    }
  }, [category, answers, startTime, router]);

  if (authLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Test not found</CardTitle>
            <CardDescription>
              This test category does not exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const currentQuestion = category.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / category.questions.length) * 100;

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-2xl">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-headline">{category.name}</CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {category.questions.length}</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-primary">
              <Timer className="h-6 w-6" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <Progress value={progress} className="w-full mt-4" />
        </CardHeader>
        <CardContent className="p-6">
          <p className="font-semibold text-lg mb-2">{currentQuestion.question}</p>
          <p className="text-sm text-muted-foreground mb-6">Choose only one.</p>
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-md border border-input has-[:checked]:border-primary has-[:checked]:bg-primary/10 transition-colors">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <div className="p-6 pt-0 flex justify-between">
          <Button variant="outline" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Previous
          </Button>

          {currentQuestionIndex === category.questions.length - 1 ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Submit Test</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will end the test and calculate your score. You cannot go back.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Button onClick={handleNext}>
              Next <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </Card>
      <AlertDialog open={showExitAlert} onOpenChange={setShowExitAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setShowExitAlert(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => router.push('/dashboard')}>Exit Test</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant="link" className="mt-4 text-muted-foreground" onClick={() => setShowExitAlert(true)}>
        Exit Test
      </Button>
    </main>
  );
}
