'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized study plan based on user's test history.
 *
 * The flow takes a user's past test scores and areas of weakness as input and uses a generative AI model to create a study plan.
 * - generateStudyPlan - A function that generates a personalized study plan.
 * - StudyPlanInput - The input type for the generateStudyPlan function.
 * - StudyPlanOutput - The return type for the generateStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudyPlanInputSchema = z.object({
  testHistory: z
    .string()
    .describe(
      'A string containing the user’s past test scores and areas of weakness. Should be a JSON stringified array of objects.'
    ),
});
export type StudyPlanInput = z.infer<typeof StudyPlanInputSchema>;

const StudyPlanOutputSchema = z.object({
  studyPlan: z
    .string()
    .describe('A personalized study plan tailored to the user’s weaknesses.'),
});
export type StudyPlanOutput = z.infer<typeof StudyPlanOutputSchema>;

export async function generateStudyPlan(input: StudyPlanInput): Promise<StudyPlanOutput> {
  return generateStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studyPlanPrompt',
  input: {schema: StudyPlanInputSchema},
  output: {schema: StudyPlanOutputSchema},
  prompt: `You are an AI study plan generator. Given the following test history, generate a personalized study plan that focuses on the user's weaknesses.

Test History: {{{testHistory}}}

Study Plan:`,
});

const generateStudyPlanFlow = ai.defineFlow(
  {
    name: 'generateStudyPlanFlow',
    inputSchema: StudyPlanInputSchema,
    outputSchema: StudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
