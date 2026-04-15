import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 flex flex-col justify-center">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
              {project.title}
            </h3>
            <p className="mb-4 text-slate-400">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <ul className="mb-6 list-disc space-y-2 pl-5 text-slate-300">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              View GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;