import { MapPin, BookOpen, Wrench } from "lucide-react";

export default function ProfileHeader() {
  return (
    <header className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Xiangxu</h1>
      <div className="space-y-4 max-w-2xl mx-auto text-left text-gray-700 text-lg leading-relaxed">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-pink-100/50 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-pink-400" />
          </div>
          <p>
            Based in Toronto, currently building modern and accessible websites
            at a design agency.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-yellow-100/50 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-yellow-400" />
          </div>
          <p>
            Outside of work, I enjoy learning new tech stacks and reading
            sci-fi.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-100/50 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-purple-400" />
          </div>
          <p>
            During maternity leave, I independently built two WordPress plugins.
          </p>
        </div>
      </div>
    </header>
  );
}
