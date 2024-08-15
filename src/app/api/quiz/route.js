const quiz = [
  {
    question: "Which of the following is a built-in React hook?",
    answers: ["useState", "useFetch", "useLocalStorage", "useTimeout"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of Next.js?",
    answers: [
      "To create single-page applications",
      "To build server-side rendered applications",
      "To manage state in React",
      "To style components",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which command is used to create a new Next.js application?",
    answers: [
      "npx create-next-app",
      "npm init next-app",
      "next create-app",
      "create-next-app",
    ],
    correctAnswer: 0,
  },
  {
    question: "What file is used to customize the Next.js configuration?",
    answers: ["next.config.js", "config.js", "next-settings.js", "settings.js"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is true about Next.js?",
    answers: [
      "It only supports static site generation.",
      "It supports both static and server-side rendering.",
      "It is a CSS framework.",
      "It cannot be used with React.",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the `getStaticProps` function?",
    answers: [
      "To fetch data at build time for static generation",
      "To fetch data on each request",
      "To manage client-side state",
      "To handle API routes",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do you create a dynamic route in Next.js?",
    answers: [
      "By creating a file with the name [id].js",
      "By using the `next/router` package",
      "By defining routes in next.config.js",
      "By using the `Link` component",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the default port for a Next.js application?",
    answers: ["3000", "8080", "5000", "4000"],
    correctAnswer: 0,
  },
  {
    question: "Which method is used to handle API routes in Next.js?",
    answers: ["getServerSideProps", "API routes", "getStaticProps", "Next API"],
    correctAnswer: 1,
  },
  {
    question: "What feature does Next.js provide for image optimization?",
    answers: [
      "Automatic image resizing",
      "Image CDN",
      "Image compression",
      "Next Image component",
    ],
    correctAnswer: 3,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(quiz), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
