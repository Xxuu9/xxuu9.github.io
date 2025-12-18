import ProfileHeader from "./components/ProfileHeader";
import PluginItem from "./components/PluginItem";
import ProjectItem from "./components/ProjectItem";
import { plugins } from "./data/plugins";
import { projects } from "./data/projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Side Projects: WordPress Plugins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.map((plugin) => (
              <PluginItem key={plugin.name} plugin={plugin} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Projects at Work
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 text-center">
            These are a few recent highlights — more available upon request.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
