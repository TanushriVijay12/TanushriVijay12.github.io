import skills from "../data/skills";

const SkillCard = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
    <h3 className="mb-4 text-xl font-semibold text-cyan-400">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-slate-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard title="Languages" items={skills.languages} />
        <SkillCard title="Data & ML" items={skills.dataML} />
        <SkillCard title="Big Data & Cloud" items={skills.bigDataCloud} />
        <SkillCard title="Tools" items={skills.tools} />
      </div>
    </section>
  );
};

export default Skills;