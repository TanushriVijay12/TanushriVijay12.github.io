import experience from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Experience</h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400">
                  {item.role}
                </h3>
                <p className="text-slate-300">{item.org}</p>
              </div>
              <p className="text-slate-400">{item.date}</p>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;