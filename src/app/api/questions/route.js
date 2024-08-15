const questions = [
  {
    category: "HTML",
    id: "sign-up-form",
    name: "Sign-Up Form",
  },
  {
    category: "HTML",
    id: "login-form",
    name: "Login Form",
  },
  {
    category: "HTML",
    id: "contact-form",
    name: "Contact Form",
  },
  {
    category: "HTML",
    id: "newsletter-signup",
    name: "Newsletter Signup",
  },
  {
    category: "HTML",
    id: "comment-section",
    name: "Comment Section",
  },
  {
    category: "CSS",
    id: "responsive-layout",
    name: "Responsive Layout",
  },
  {
    category: "CSS",
    id: "animated-buttons",
    name: "Animated Buttons",
  },
  {
    category: "CSS",
    id: "image-gallery",
    name: "Image Gallery",
  },
  {
    category: "CSS",
    id: "pricing-table",
    name: "Pricing Table",
  },
  {
    category: "CSS",
    id: "parallax-scrolling",
    name: "Parallax Scrolling",
  },
  {
    category: "JavaScript",
    id: "carousel-slider",
    name: "Carousel Slider",
  },
  {
    category: "JavaScript",
    id: "accordion-menu",
    name: "Accordion Menu",
  },
  {
    category: "JavaScript",
    id: "modal-popup",
    name: "Modal Popup",
  },
  {
    category: "JavaScript",
    id: "infinite-scroll",
    name: "Infinite Scroll",
  },
  {
    category: "JavaScript",
    id: "form-validation",
    name: "Form Validation",
  },
  {
    category: "React",
    id: "todo-list",
    name: "Todo List",
  },
  {
    category: "React",
    id: "weather-app",
    name: "Weather App",
  },
  {
    category: "React",
    id: "blog-website",
    name: "Blog Website",
  },
  {
    category: "React",
    id: "e-commerce-store",
    name: "E-Commerce Store",
  },
  {
    category: "React",
    id: "social-media-feed",
    name: "Social Media Feed",
  },
  {
    category: "Angular",
    id: "dashboard-panel",
    name: "Dashboard Panel",
  },
  {
    category: "Angular",
    id: "admin-dashboard",
    name: "Admin Dashboard",
  },
  {
    category: "Angular",
    id: "user-profile",
    name: "User Profile",
  },
  {
    category: "Angular",
    id: "file-upload",
    name: "File Upload",
  },
  {
    category: "Angular",
    id: "real-time-chat",
    name: "Real-Time Chat",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(questions), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
