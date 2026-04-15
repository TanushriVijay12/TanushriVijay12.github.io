import skills from "../data/skills";

import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiApachehadoop,
  SiJupyter,
} from "react-icons/si";
import { FaJava, FaAws, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";

const skillIcons = {
  Python: <SiPython />,
  SQL: <FaDatabase />,
  Java: <FaJava />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  "scikit-learn": <SiScikitlearn />,
  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  Hadoop: <SiApachehadoop />,
  HDFS: <FaDatabase />,
  MapReduce: <FaDatabase />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Jupyter: <SiJupyter />,
  "Oracle SQL Developer": <FaDatabase />,
};

const SkillCard = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
    <h3 className="mb-4 text-xl font-semibold text-cyan-400">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="skill-item rounded-full border border-cyan-400/30 px-3 py-2 text-sm text-slate-300 flex items-center gap-2"
        >
          <span className="skill-icon">{skillIcons[item]}</span>
          <span>{item}</span>
        </div>
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

