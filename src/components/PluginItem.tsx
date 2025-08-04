import type { Plugin } from "../data/plugins";
import { ExternalLink, Check } from "lucide-react";

export default function PluginItem({ plugin }: { plugin: Plugin }) {
  return (
    <a
      href={plugin.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center mb-1">
        <h3 className="text-lg font-semibold text-gray-900">{plugin.name}</h3>
        <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <ul className="space-y-2 text-gray-600">
        {plugin.features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2">
            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </a>
  );
}
