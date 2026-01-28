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
  {
    id: 'abstract-reasoning',
    name: 'Abstract Reasoning',
    description: 'Identify patterns and relationships in abstract shapes and figures.',
    duration: 1,
    questions: [
      {
        id: 'ar1',
        question: 'Which figure completes the series?',
        options: ['A', 'B', 'C', 'D'],
        answer: 'B',
        explanation: 'The pattern rotates 90 degrees clockwise in each step.',
      },
      {
        id: 'ar2',
        question: 'Which is the odd one out?',
        options: ['Square', 'Circle', 'Triangle', 'Arrow'],
        answer: 'Arrow',
        explanation: 'Square, Circle, and Triangle are basic geometric shapes, while an arrow indicates direction.',
      },
    ],
  },
  {
    id: 'numerical-reasoning',
    name: 'Numerical Reasoning',
    description: 'Interpret and use numerical data to solve problems.',
    duration: 1,
    questions: [
      {
        id: 'nr1',
        question: 'A company\'s profit increased from $50,000 to $60,000. What is the percentage increase?',
        options: ['10%', '20%', '25%', '30%'],
        answer: '20%',
        explanation: 'Increase = $10,000. Percentage Increase = (10,000 / 50,000) * 100 = 20%.',
      },
      {
        id: 'nr2',
        question: 'If a product costs $80 and is sold with a 25% profit margin, what is the selling price?',
        options: ['$90', '$100', '$105', '$110'],
        answer: '$100',
        explanation: 'Profit = 25% of $80 = $20. Selling Price = Cost + Profit = $80 + $20 = $100.',
      },
    ],
  },
  {
    id: 'error-checking',
    name: 'Error Checking',
    description: 'Compare information and identify errors quickly and accurately.',
    duration: 1,
    questions: [
      {
        id: 'ec1',
        question: 'Original: John Smith, 123 Main St. Copy: Jon Smith, 123 Main St. Is there an error?',
        options: ['Yes', 'No'],
        answer: 'Yes',
        explanation: 'The name "John" is misspelled as "Jon" in the copy.',
      },
      {
        id: 'ec2',
        question: 'Original: AB-45-CD-12. Copy: AB-45-CD-12. Is there an error?',
        options: ['Yes', 'No'],
        answer: 'No',
        explanation: 'The copy is identical to the original.',
      },
    ],
  },
  {
    id: 'reading-comprehension',
    name: 'Reading Comprehension',
    description: 'Read passages and answer questions based on the text.',
    duration: 1,
    questions: [
      {
        id: 'rc1',
        question: 'After reading a passage about the importance of recycling, what is the main idea?',
        options: ['Recycling is difficult.', 'Recycling helps the environment.', 'Landfills are large.', 'Paper comes from trees.'],
        answer: 'Recycling helps the environment.',
        explanation: 'The main idea is the central point of the passage.',
      },
    ],
  },
  {
    id: 'basic-computer-knowledge',
    name: 'Basic Computer Knowledge',
    description: 'Test your understanding of fundamental computer concepts.',
    duration: 1,
    questions: [
      {
        id: 'bck1',
        question: 'What does CPU stand for?',
        options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Unit', 'Core Processing Unit'],
        answer: 'Central Processing Unit',
        explanation: 'The CPU is the primary component of a computer that performs most of the processing.',
      },
    ],
  },
    {
    id: 'financial-literacy',
    name: 'Financial Literacy',
    description: 'Assess your knowledge of personal finance concepts.',
    duration: 1,
    questions: [
      {
        id: 'fl1',
        question: 'What is compound interest?',
        options: ['Interest on the principal amount only', 'Interest calculated on the initial principal and also on the accumulated interest', 'A one-time fee', 'Interest paid in advance'],
        answer: 'Interest calculated on the initial principal and also on the accumulated interest',
        explanation: 'Compound interest is interest on interest, leading to exponential growth.',
      },
    ],
  },
  {
    id: 'critical-thinking',
    name: 'Critical Thinking',
    description: 'Analyze information objectively and make a reasoned judgment.',
    duration: 1,
    questions: [
      {
        id: 'ct1',
        question: 'A study shows a correlation between ice cream sales and crime rates. What is a likely explanation?',
        options: ['Eating ice cream causes crime', 'Crime causes people to eat ice cream', 'A third factor, like hot weather, influences both', 'The study is flawed'],
        answer: 'A third factor, like hot weather, influences both',
        explanation: 'Correlation does not imply causation. A third variable is often responsible for the observed relationship.',
      },
    ],
  },
  {
    id: 'attention-to-detail',
    name: 'Attention to Detail',
    description: 'Test your ability to spot small details and inconsistencies.',
    duration: 1,
    questions: [
      {
        id: 'ad1',
        question: 'Find the different character: OOOOQOOOO',
        options: ['First O', 'Fifth character', 'Last O', 'No difference'],
        answer: 'Fifth character',
        explanation: 'The fifth character in the sequence is a Q, not an O.',
      },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    description: 'Apply logical and creative thinking to solve complex problems.',
    duration: 1,
    questions: [
      {
        id: 'ps1',
        question: 'You have a 3-gallon jug and a 5-gallon jug. How can you measure exactly 4 gallons of water?',
        options: ['Fill the 5-gallon jug, pour into 3-gallon jug, empty 3-gallon jug, pour remaining 2 gallons, refill 5-gallon jug, fill 3-gallon jug from 5-gallon jug.', 'It is impossible', 'Fill the 3-gallon jug and pour it into the 5-gallon jug twice.', 'Fill the 5-gallon jug, pour into the 3-gallon jug, leaving 2 gallons. Empty the 3-gallon jug. Pour the 2 gallons into the 3-gallon jug. Fill the 5-gallon jug and top up the 3-gallon jug, leaving 4 gallons in the 5-gallon jug.'],
        answer: 'Fill the 5-gallon jug, pour into the 3-gallon jug, leaving 2 gallons. Empty the 3-gallon jug. Pour the 2 gallons into the 3-gallon jug. Fill the 5-gallon jug and top up the 3-gallon jug, leaving 4 gallons in the 5-gallon jug.',
        explanation: 'This is a classic water jug riddle. Following these steps precisely yields 4 gallons.',
      },
    ],
  },
  {
    id: 'creativity',
    name: 'Creativity',
    description: 'Test your ability to think outside the box and generate new ideas.',
    duration: 1,
    questions: [
      {
        id: 'cr1',
        question: 'How many uses can you think of for a brick?',
        options: ['Only for building', 'As a doorstop', 'As a paperweight', 'Dozens of uses, including the above and more.'],
        answer: 'Dozens of uses, including the above and more.',
        explanation: 'This question tests divergent thinking. A brick can be used for many purposes beyond its primary function.',
      },
    ],
  },
  {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence',
    description: 'Assess your ability to perceive, use, understand, and manage emotions.',
    duration: 1,
    questions: [
      {
        id: 'ei1',
        question: 'A team member is visibly upset after a meeting. What is the best first step?',
        options: ['Ignore them to give them space.', 'Tell them to cheer up.', 'Privately ask if they are okay and want to talk.', 'Report their behavior to HR.'],
        answer: 'Privately ask if they are okay and want to talk.',
        explanation: 'Showing empathy and offering support in a private, non-intrusive way is a key component of emotional intelligence.',
      },
    ],
  },
];
