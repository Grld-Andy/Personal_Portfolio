import Experience from "../types/Experience";

const experiences: Array<Experience> = [
  {
    name: "University of Mines and Technology",
    position: "Bachelors of Computer Science and Engineering",
    location: "Ghana, Western Region, Tarkwa",
    description:
      "Pursuing a Bachelor's degree in Computer Science and Engineering, gaining expertise in software development, data structures, algorithms, and system architecture. Engaged in hands-on projects and research to solve real-world computing problems.",
    date: "15th January, 2020 - 20th November, 2025",
    logo: "/images/experiences/umat-logo.png",
  },
  {
    name: "Persol Systems Limited",
    position: ".NET Intern",
    location: "Ghana, Greater Accra Region, Airport Residential",
    description:
      "Worked on enterprise software solutions using .NET technologies. Assisted in developing, testing, and optimizing applications while collaborating with senior engineers to improve system performance and maintainability.",
    date: "15th September, 2023 - 20th December, 2023",
    logo: "/images/experiences/logo-persol-systems-limited.png",
  },
  {
    name: "Amalitech IT Services",
    position: "Backend Engineering Intern",
    location: "Ghana, Greater Accra Region, Tema Highway",
    description:
      "Gained hands-on experience in backend development, focusing on building scalable APIs and database management. Worked with technologies like Node.js, Express, and PostgreSQL to optimize backend workflows.",
    date: "15th September, 2024 - 20th October, 2024",
    logo: "/images/experiences/amalitech-logo.jpg",
  },
  {
    name: "Scynett Services",
    position: "Backend Engineering Intern",
    location: "Remote",
    description:
      "Developed and optimized backend services using C# and .NET. Built RESTful APIs, implemented database optimizations, and improved system performance by integrating caching mechanisms. Collaborated with a remote team to deliver scalable and maintainable solutions.",
    date: "22nd October, 2024 - 20th December, 2024",
    logo: "/images/experiences/scynett-logo.png",
  },
];

export default experiences.reverse();
