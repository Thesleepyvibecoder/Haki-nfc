import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  weather,
  calendar,
  restaurant,
  hakiTap,
hakiConnect,
hakiEngage,
hakiGrow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: "Expert",
  },
  {
    name: "CSS 3",
    icon: css,
    level: "Expert",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "Expert",
  },
  {
    name: "TypeScript",
    icon: typescript,
    level: "Advanced",
  },
  {
    name: "React JS",
    icon: reactjs,
    level: "Expert",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: "Expert",
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "Intermediate",
  },
  {
    name: "Three JS",
    icon: threejs,
    level: "Intermediate",
  },
  {
    name: "git",
    icon: git,
    level: "Advanced",
  },
  {
    name: "figma",
    icon: figma,
    level: "Intermediate",
  },
  {
    name: "docker",
    icon: docker,
    level: "Intermediate",
  },
];

const experiences = [
  {
    title: "Tap",
    company_name: "Start the Experience",
    icon: "/haki-tap.svg",
    iconBg: "#383E56",
    date: "Step 01",
    skills: ["NFC", "One Tap", "Instant"],
    points: [
      "Customers simply tap their phone on your Haki NFC product.",
      "No app, QR code, or complicated process is required.",
      "The NFC technology instantly detects the interaction and gets things moving.",
    ],
  },
  {
    title: "Connect",
    company_name: "Open Your Digital Experience",
    icon: "/haki-connect.svg",
    iconBg: "#E6DEDD",
    date: "Step 02",
    skills: ["Smart Link", "Mobile", "Seamless"],
    points: [
      "The tap instantly opens the digital destination you've configured.",
      "Send customers to your Google review page, website, contact details, social profiles, or any other link.",
      "One physical product can become a direct bridge between your customer and your business.",
    ],
  },
  {
    title: "Engage",
    company_name: "Turn Taps Into Interactions",
    icon: "/haki-engage.svg",
    iconBg: "#383E56",
    date: "Step 03",
    skills: ["Reviews", "Contacts", "Socials"],
    points: [
      "Make it effortless for customers to review, connect, follow, or discover your business.",
      "Give every customer a simple and memorable way to interact with your brand.",
      "Create more meaningful digital interactions without adding friction.",
    ],
  },
  {
    title: "Grow",
    company_name: "Build Better Customer Connections",
    icon: "/haki-grow.svg",
    iconBg: "#E6DEDD",
    date: "Step 04",
    skills: ["Engagement", "Visibility", "Growth"],
    points: [
      "Turn everyday customer interactions into opportunities for growth.",
      "Make your business easier to discover, remember, and connect with.",
      "Haki NFC helps bring your physical and digital customer experience together.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tanmay proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    date: "March 2024",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tanmay does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    date: "July 2024",
  },
  {
    testimonial:
      "After Tanmay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    date: "November 2024",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Web",
    description:
      "A real-time weather dashboard providing accurate forecasts, conditions, and detailed meteorological data with a sleek, dark-mode user interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://tacticalreader.github.io/WEATHER-WEB/",
  },
  {
    name: "Calendar App",
    description:
      "A modern, intuitive calendar application for managing events and schedules, featuring day, week, and month views with color-coded organization.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://tacticalreader.github.io/Calendar-App/",
  },
  {
    name: "Restaurant Template",
    description:
      "An elegant, responsive landing page template for restaurants, showcasing menus, reservations, and a gallery with a premium visual design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/TacticalReader/Restaurant-template-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
