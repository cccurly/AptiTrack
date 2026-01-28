"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";
import { Loader2, BrainCircuit } from "lucide-react";
import type { TestResult } from "@/lib/types";
import { formatTime } from "@/lib/utils";
import { format } from "date-fns";
import { getStudyPlan } from "../actions";

function StudyPlanGenerator({ history }: { history: TestResult[] }) {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGeneratePlan = async () => {
    setLoading(true);
    setError("");
    setPlan("");

    const testHistorySummary = history.map(h => ({
      category: h.categoryName,
      score: `${h.score}/${h.total}`,
      date: h.date
    }));

    const result = await getStudyPlan(JSON.stringify(testHistorySummary));
    if (result.success) {
      setPlan(result.plan!);
    } else {
      setError(result.error!);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BrainCircuit className="h-6 w-6 text-primary" />
          Personalized Study Plan
        </CardTitle>
        <CardDescription>
          Generate an AI-powered study plan based on your test history to focus on your weak areas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Generating your plan...</p>
          </div>
        )}
        {error && <p className="text-destructive">{error}</p>}
        {plan && (
           <div className="prose dark:prose-invert max-w-none p-4 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-semibold">Your Custom Plan:</h3>
            <p className="whitespace-pre-wrap">{plan}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGeneratePlan} disabled={loading}>
          {loading ? "Generating..." : "Generate New Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
}


export default function HistoryPage() {
  const { user, loading: authLoading } = useAuth();
  const [history, setHistory] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem("aptiTrack-history");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch(e) {
      console.error("Failed to load history", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const chartData = history
  .slice(0, 10) // show last 10 attempts
  .reverse() // show oldest first
  .map(item => ({
    name: `${item.categoryName.split(' ')[0]} (${format(new Date(item.date), 'MM/dd')})`,
    score: item.score,
    total: item.total
  }));

  const chartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--primary))",
    },
  };

  if (authLoading || loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">
            Your Test History
          </h1>

          {history.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <h2 className="text-xl font-semibold text-muted-foreground">No history yet</h2>
              <p className="text-muted-foreground">Complete a test to see your history here.</p>
            </div>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Score Progress</CardTitle>
                  <CardDescription>Your scores from the last 10 attempts.</CardDescription>
                </CardHeader>
                <CardContent>
                   <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 15)}
                      />
                      <YAxis dataKey="total" hide/>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar dataKey="score" fill="var(--color-score)" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">All Attempts</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Topic</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                        <TableHead className="text-right">Time Taken</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {history.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.categoryName}</TableCell>
                          <TableCell>{format(new Date(item.date), "PPP")}</TableCell>
                          <TableCell className="text-right">{item.score}/{item.total}</TableCell>
                          <TableCell className="text-right">{formatTime(item.timeTaken)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <StudyPlanGenerator history={history} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
