interface Project {
  name: string;
  id: number;
  image: string;
  website?: string;
  github?: string;
  techStack: Array<string>;
  description: string;
  tag: "Personal" | "School" | "Work";
}

export default Project;
