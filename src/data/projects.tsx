
import { Rocket, Wrench } from "lucide-react";
import type { ReactNode } from "react";

interface Project {
  number: string;
  name: string;
  status: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  tone: "mint" | "lavender";
  icon: ReactNode;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Swap4Work",
    status: "LIVE · MARKETING",
    description:
      "A community platform that helps people exchange items, skills, and services. I took the idea from concept to a live product and continue to lead its launch and marketing.",
    tags: ["Product development", "React", "Launch & marketing"],
    link: "https://swap4work.us/",
    linkLabel: "Visit Swap4Work",
    tone: "mint",
    icon: <Rocket size={22} />,
  },
  {
    number: "02",
    name: "Relay",
    status: "IN DEVELOPMENT",
    description:
      "A restaurant manager assistant designed to make day-to-day operations easier by bringing communications and customer feedback into a more manageable workflow.",
    tags: ["Product thinking", "Workflow tools", "AI-assisted development"],
    link: "https://aquatic-relay-ops-flow.base44.app",
    linkLabel: "Ask me about Relay",
    tone: "lavender",
    icon: <Wrench size={22} />,
  },
];
