export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  questions: Question[];
};

export type TestResult = {
  id: string;
  categoryId: string;
  categoryName: string;
  score: number;
  total: number;
  timeTaken: number; // in seconds
  date: string;
  answers: Record<string, string>;
  questions: Question[];
};
