import Experience from "../types/Experience";

const experiences: Array<Experience> = [
  {
    name: "University of Mines and Technology",
    position: "B.Sc. Computer Science and Engineering",
    location: "Ghana, Western Region, Tarkwa",
    description:
      "Studied Computer Science and Engineering with a focus on algorithms, databases, and software design. Spent most of the programme building real projects across backend, desktop, and web.",
    date: "Jan 2021 - Sep 2025",
    logo: "/images/experiences/umat-logo.png",
  },
  {
    name: "Persol Systems Limited",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Airport Residential",
    description:
      "Contributed to feature development and performance improvements on enterprise .NET applications, working closely with senior engineers on production-grade code.",
    date: "Sep 2023 - Dec 2023",
    logo: "/images/experiences/logo-persol-systems-limited.png",
  },
  {
    name: "Amalitech IT Services",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Tema Highway",
    description:
      "Developed TypeScript REST APIs with Express and PostgreSQL from the ground up, integrating MongoDB, Redis caching, and writing end-to-end tests and Swagger docs to keep the API stable and easy to work with.",
    date: "Sep 2024 - Oct 2024",
    logo: "/images/experiences/amalitech-logo.jpg",
  },
  {
    name: "Scynett Services",
    position: "Backend Engineer",
    location: "Remote",
    description:
      "Built and maintained C# .NET Core APIs with an emphasis on testability and clean code. Improved query performance and database schema design, which cleared up slowness that had been sitting in the codebase for a while.",
    date: "Oct 2024 - Dec 2024",
    logo: "/images/experiences/scynett-logo.png",
  },
  {
    name: "Persol Systems Limited",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Airport Residential",
    description:
      "Work across TypeScript and C# .NET services on the same production codebase. Broke apart a monolith into independently testable modules using CQRS, and brought API response times down considerably through query tuning, indexing, and cleaning up legacy server side logic.",
    date: "Jan 2026 - Present",
    logo: "/images/experiences/logo-persol-systems-limited.png",
  },
];

export default experiences.reverse();
