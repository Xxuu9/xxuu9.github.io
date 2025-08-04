import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 mt-12 space-y-3">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Xxuu9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <Github className="w-6 h-6 inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/sophie-t-80b97a201/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <Linkedin className="w-6 h-6 inline" />
        </a>
      </div>
      <div>© 2025 · Toronto · Web Developer</div>
    </footer>
  );
}
