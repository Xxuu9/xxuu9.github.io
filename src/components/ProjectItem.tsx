import type { Project } from "../data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      {" "}
      <div className="flex items-center mb-1">
        <h3 className="text-base font-medium text-gray-900">{project.name}</h3>
        <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-sm text-gray-500">{project.tech}</p>
    </a>
  );
}
