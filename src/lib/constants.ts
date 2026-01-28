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
        options: ['Mittens is not an animal', 'All animals are cats', 'Mittens is an animal', 'Some cats are not an-imals'],
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
  {
    id: 'data-interpretation',
    name: 'Data Interpretation',
    description: 'Analyze and interpret data from charts and graphs.',
    duration: 1,
    questions: [
      {
        id: 'd1',
        question: 'Based on a chart where March sales are highest, which month had the highest sales?',
        options: ['January', 'February', 'March', 'April'],
        answer: 'March',
        explanation: 'If the bar for March is the highest on the chart, it indicates the highest sales for that month.',
      },
      {
        id: 'd2',
        question: 'If sales were 100 in January and 120 in February, what was the percentage increase?',
        options: ['10%', '15%', '20%', '25%'],
        answer: '20%',
        explanation: 'Percentage increase is calculated as ((New Value - Old Value) / Old Value) * 100. So, ((120 - 100) / 100) * 100 = 20%.',
      },
    ],
  },
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    description: 'Test your awareness of current events and general facts.',
    duration: 1,
    questions: [
      {
        id: 'g1',
        question: 'What is the capital of Japan?',
        options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
        answer: 'Tokyo',
        explanation: 'Tokyo is the capital city of Japan.',
      },
      {
        id: 'g2',
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        answer: 'William Shakespeare',
        explanation: 'William Shakespeare is the famous playwright who wrote "Romeo and Juliet".',
      },
    ],
  },
  {
    id: 'mechanical-reasoning',
    name: 'Mechanical Reasoning',
    description: 'Understand and apply mechanical concepts.',
    duration: 1,
    questions: [
      {
        id: 'm1',
        question: 'If gear A turns clockwise, which way will gear C turn if they are interlocked in a line A-B-C?',
        options: ['Clockwise', 'Counter-clockwise', 'It will not turn', 'Depends on the size'],
        answer: 'Clockwise',
        explanation: 'Gear A turns clockwise, making Gear B turn counter-clockwise. Gear C, interlocked with B, will turn clockwise.',
      },
      {
        id: 'm2',
        question: 'Which principle explains why a boat floats?',
        options: ['Gravity', 'Archimedes\' Principle', 'Bernoulli\'s Principle', 'Newton\'s First Law'],
        answer: 'Archimedes\' Principle',
        explanation: 'Archimedes\' principle states that the upward buoyant force on a body in a fluid is equal to the weight of the fluid displaced by the body.',
      },
    ],
  },
  {
    id: 'situational-judgement',
    name: 'Situational Judgement',
    description: 'Assess your responses to hypothetical work-related situations.',
    duration: 1,
    questions: [
      {
        id: 's1',
        question: 'You notice a colleague struggling with their workload. What is the most effective action to take?',
        options: ['Tell your manager they are not performing', 'Offer to help them with some of their tasks', 'Ignore it as it\'s not your responsibility', 'Publicly point out their struggles'],
        answer: 'Offer to help them with some of their tasks',
        explanation: 'Being a supportive team member is crucial. Offering help is a constructive and positive approach.',
      },
      {
        id: 's2',
        question: 'You disagree with your manager\'s decision on a project. What should you do?',
        options: ['Complain to your colleagues', 'Do as you are told without question', 'Schedule a private meeting to discuss your concerns and suggest alternatives', 'Go above their head to their manager'],
        answer: 'Schedule a private meeting to discuss your concerns and suggest alternatives',
        explanation: 'Professional and private communication is the best way to handle disagreements and show initiative.',
      },
    ],
  },
  {
    id: 'coding-programming',
    name: 'Coding & Programming',
    description: 'Test your knowledge of basic programming concepts.',
    duration: 1,
    questions: [
      {
        id: 'c1',
        question: 'What does the "var" keyword declare in JavaScript?',
        options: ['A constant', 'A block-scoped variable', 'A function-scoped variable', 'A global variable only'],
        answer: 'A function-scoped variable',
        explanation: 'Variables declared with `var` are scoped to the function they are in, or globally if declared outside a function.',
      },
      {
        id: 'c2',
        question: 'In Python, which data type is used to store a sequence of characters?',
        options: ['int', 'float', 'char', 'str'],
        answer: 'str',
        explanation: 'The `str` data type is used for strings in Python.',
      },
    ],
  },
  {
    id: 'spatial-reasoning',
    name: 'Spatial Reasoning',
    description: 'Assess your ability to visualize and manipulate 2D and 3D objects.',
    duration: 1,
    questions: [
      {
        id: 'sr1',
        question: 'If a cube is unfolded, how many squares will it have?',
        options: ['4', '6', '8', '12'],
        answer: '6',
        explanation: 'A cube has 6 faces, so its unfolded net will consist of 6 squares.',
      },
      {
        id: 'sr2',
        question: 'Which 3D shape can be made by folding a single piece of paper with four connected squares in a line and one on top of the second square?',
        options: ['A pyramid', 'An open-top box', 'A triangular prism', 'A cylinder'],
        answer: 'An open-top box',
        explanation: 'This "T" shape net is a classic pattern for creating an open-top box (a cube missing one face).',
      },
    ],
  },
];
