import { type Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'quantitative-aptitude',
    name: 'Quantitative Aptitude',
    description: 'Test your ability to solve numerical problems and interpret data.',
    duration: 1, // 1 minute for demo
    questions: [
      {
        id: 'q1',
        question: 'What is 25% of 200?',
        options: ['25', '40', '50', '60'],
        answer: '50',
        explanation: '25% of 200 is (25/100) * 200 = 50.',
      },
      {
        id: 'q2',
        question: 'A car travels at a speed of 60 km/h. How far will it travel in 2.5 hours?',
        options: ['120 km', '150 km', '180 km', '100 km'],
        answer: '150 km',
        explanation: 'Distance = Speed × Time. So, 60 km/h * 2.5 h = 150 km.',
      },
       {
        id: 'q3',
        question: 'If a box contains 12 red balls and 18 blue balls, what is the ratio of red balls to blue balls?',
        options: ['2:3', '3:2', '1:2', '2:1'],
        answer: '2:3',
        explanation: 'The ratio is 12:18, which simplifies to 2:3 by dividing both numbers by 6.',
      },
    ],
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    description: 'Assess your logical thinking and problem-solving skills.',
    duration: 1, // 1 minute for demo
    questions: [
      {
        id: 'l1',
        question: 'Which number should come next in the series: 1, 4, 9, 16, __?',
        options: ['20', '25', '30', '36'],
        answer: '25',
        explanation: 'The series consists of squares of consecutive integers (1^2, 2^2, 3^2, 4^2). The next is 5^2 = 25.',
      },
      {
        id: 'l2',
        question: 'Statement: All cats are animals. Mittens is a cat. Conclusion?',
        options: ['Mittens is not an animal', 'All animals are cats', 'Mittens is an animal', 'Some cats are not animals'],
        answer: 'Mittens is an animal',
        explanation: 'This is a straightforward deduction from the given premises.',
      },
    ],
  },
  {
    id: 'verbal-ability',
    name: 'Verbal Ability',
    description: 'Evaluate your command of the English language and comprehension.',
    duration: 1, // 1 minute for demo
    questions: [
      {
        id: 'v1',
        question: 'Choose the word that is most nearly opposite in meaning to "transparent".',
        options: ['Clear', 'Opaque', 'Bright', 'Hazy'],
        answer: 'Opaque',
        explanation: 'Opaque is the direct antonym of transparent, meaning not able to be seen through.',
      },
      {
        id: 'v2',
        question: 'Which of the following sentences is grammatically correct?',
        options: ['They is going to the park.', 'She don\'t like ice cream.', 'He plays the guitar very well.', 'We was happy to see them.'],
        answer: 'He plays the guitar very well.',
        explanation: 'The subject "He" agrees with the verb "plays". The other sentences have subject-verb agreement errors.',
      },
    ],
  },
];
