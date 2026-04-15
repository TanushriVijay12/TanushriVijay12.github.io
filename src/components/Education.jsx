import education from "../data/education";

const Education = () => {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Education</h2>
      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {item.school}
            </h3>
            <p className="mt-2 text-slate-300">{item.degree}</p>
            <p className="mt-1 text-slate-400">{item.date}</p>
            <p className="mt-4 text-slate-300">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;