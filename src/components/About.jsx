const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 flex flex-col justify-center">
      <h2 className="mb-10 text-3xl font-bold">About</h2>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
          <h3 className="mb-5 text-2xl font-semibold text-cyan-400">About Me</h3>
          <p className="leading-8 text-slate-300">
            I am a Data Science graduate student at NJIT with a strong interest in
            machine learning, analytics, and data-driven problem solving. Through
            academic and hands-on projects, I have worked with text classification,
            SQL, Hadoop, and deep learning to build practical solutions from data.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            I enjoy learning by building, exploring data deeply, improving systems
            step by step, and creating work that is both technically strong and
            meaningful. I am especially interested in opportunities where I can
            combine analytics, machine learning, and practical problem-solving to
            build useful solutions.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-4 text-xl font-semibold text-cyan-400">Education</h3>
            <p className="leading-8 text-slate-300">
              <span className="font-semibold text-white">
                New Jersey Institute of Technology
              </span>
              <br />
              Master of Science in Data Science
              <br />
              Expected Graduation: May 2026
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-4 text-xl font-semibold text-cyan-400">How I Work</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Analytical and structured problem-solving</li>
              <li>Detail-oriented and consistent in execution</li>
              <li>Strong learner with a hands-on approach</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-4 text-xl font-semibold text-cyan-400">Outside Tech</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Acrylic mini-canvas painting</li>
              <li>Interest in minimal and aesthetic design</li>
              <li>Enjoy blending creativity with structured thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;