import Experience from "../types/Experience";

const experiences: Array<Experience> = [
  {
    name: "University of Mines and Technology",
    position: "B.Sc. Computer Science and Engineering",
    location: "Ghana, Western Region, Tarkwa",
    description:
      "Completed a Bachelor's degree in Computer Science and Engineering, covering data structures and algorithms, database systems, web development, and object-oriented programming. Built hands-on projects across backend, desktop, and web domains throughout the programme.",
    date: "Jan 2020 - Sep 2025",
    logo: "/images/experiences/umat-logo.png",
  },
  {
    name: "Persol Systems Limited",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Airport Residential",
    description:
      "Worked on enterprise .NET applications alongside senior engineers, contributing to feature development, testing, and performance optimization across production codebases.",
    date: "Sep 2023 - Dec 2023",
    logo: "/images/experiences/logo-persol-systems-limited.png",
  },
  {
    name: "Amalitech IT Services",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Tema Highway",
    description:
      "Built REST APIs in TypeScript with Express and PostgreSQL, covering auth, data validation, and error handling from scratch. Added MongoDB for document storage and set up Redis caching to reduce database load on frequently hit endpoints. Wrote Swagger documentation and end-to-end tests to give the team a reliable API contract and speed up onboarding.",
    date: "Sep 2024 - Oct 2024",
    logo: "/images/experiences/amalitech-logo.jpg",
  },
  {
    name: "Scynett Services",
    position: "Backend Engineer",
    location: "Remote",
    description:
      "Developed and maintained REST APIs in C# .NET Core with a focus on clean, testable code using SOLID principles. Wrote unit and integration tests that caught regressions early and gave the team confidence when shipping changes. Improved MS SQL Server query performance and schema design, resolving long-standing slowness in key data retrieval paths.",
    date: "Oct 2024 - Dec 2024",
    logo: "/images/experiences/scynett-logo.png",
  },
  {
    name: "Persol Systems Limited",
    position: "Backend Engineer",
    location: "Ghana, Greater Accra Region, Airport Residential",
    description:
      "Built and maintained backend features across TypeScript (Node.js) and C# .NET services on the same production codebase. Refactored a monolithic service into loosely coupled modules using CQRS, making individual features easier to test and extend without touching unrelated code. Reduced API response times by roughly 40% across several endpoints by tuning slow queries, adding targeted indexes, and cleaning up legacy database logic.",
    date: "Jan 2026 - Present",
    logo: "/images/experiences/logo-persol-systems-limited.png",
  },
];

export default experiences.reverse();
