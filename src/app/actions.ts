"use server";

import { generateStudyPlan } from "@/ai/flows/personalized-study-plan";
import { z } from "zod";

export async function getStudyPlan(testHistory: string) {
  const schema = z.string().min(1, "Test history cannot be empty.");

  const validation = schema.safeParse(testHistory);
  if (!validation.success) {
    return { success: false, error: "Invalid input." };
  }

  try {
    const result = await generateStudyPlan({ testHistory: validation.data });
    return { success: true, plan: result.studyPlan };
  } catch (error) {
    console.error("Error generating study plan:", error);
    return { success: false, error: "Failed to generate study plan due to a server error." };
  }
}
