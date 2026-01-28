# **App Name**: AptiTrack

## Core Features:

- User Authentication: Secure login and registration using JWT, with redirection to the dashboard after successful login.
- Aptitude Category Display: Display all aptitude categories (e.g., Quantitative Aptitude, Logical Reasoning) with a professional card-based UI.
- Test Interface: Display questions with multiple-choice options, next/previous navigation, and a visible timer.  The questions include the prompt 'Choose only one'. Store selected answers in state.
- Result Generation: Generate the test results by processing the answers provided in the state and the questions stored in Constants.js.
- Score Analytics Display: Show total score, correct/wrong answers, and time taken on the result page, with correct answers highlighted. Add a fun celebration animation on the Result page.
- Score & Attempts History: Display all previous test attempts with topic name, date, score, and time taken, using tables and charts.
- Personalized Study Plan Generation: Use generative AI to create a tool that formulates a personalized study plan based on past test scores and areas of weakness.

## Style Guidelines:

- Primary color: Teal (#008080) to evoke a sense of trust, professionalism, and intellectual curiosity.
- Background color: Light teal (#E0F8F8), a desaturated shade of the primary color to offer a clean and unobtrusive backdrop that is easy on the eyes.
- Accent color: Muted Blue (#4682B4), a slightly different hue with appropriate brightness and saturation to maintain a professional aesthetic.
- Body font: 'Inter', sans-serif. Headline font: 'Space Grotesk', sans-serif.
- Use consistent, professional icons from a library like FontAwesome or Material Icons.
- Implement a responsive, modern design using Tailwind CSS grid and flexbox.
- Subtle animations and transitions using Framer Motion to enhance user experience, with a celebration animation on the result page.