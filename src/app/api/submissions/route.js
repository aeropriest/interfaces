const submissions = [
  {
    questionId: "sign-up-form",
    status: "CORRECT",
  },
  {
    questionId: "login-form",
    status: "INCORRECT",
  },
  {
    questionId: "contact-form",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "newsletter-signup",
    status: "",
  },
  {
    questionId: "comment-section",
    status: "CORRECT",
  },
  {
    questionId: "responsive-layout",
    status: "INCORRECT",
  },
  {
    questionId: "animated-buttons",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "image-gallery",
    status: "",
  },
  {
    questionId: "pricing-table",
    status: "CORRECT",
  },
  {
    questionId: "parallax-scrolling",
    status: "INCORRECT",
  },
  {
    questionId: "carousel-slider",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "accordion-menu",
    status: "",
  },
  {
    questionId: "modal-popup",
    status: "CORRECT",
  },
  {
    questionId: "infinite-scroll",
    status: "INCORRECT",
  },
  {
    questionId: "form-validation",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "todo-list",
    status: "",
  },
  {
    questionId: "weather-app",
    status: "CORRECT",
  },
  {
    questionId: "blog-website",
    status: "INCORRECT",
  },
  {
    questionId: "e-commerce-store",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "social-media-feed",
    status: "",
  },
  {
    questionId: "dashboard-panel",
    status: "CORRECT",
  },
  {
    questionId: "admin-dashboard",
    status: "INCORRECT",
  },
  {
    questionId: "user-profile",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "file-upload",
    status: "",
  },
  {
    questionId: "real-time-chat",
    status: "CORRECT",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(submissions), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
