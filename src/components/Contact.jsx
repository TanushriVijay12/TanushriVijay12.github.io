const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
        <p className="mb-6 text-slate-300">
          I’m open to data science, machine learning, analytics, and data-related
          opportunities.
        </p>

        <div className="space-y-3 text-slate-300">
          <p>
            Email:{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-cyan-400 hover:underline"
            >
              your-email@example.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/TanushriVijay12"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              github.com/TanushriVijay12
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Add your LinkedIn URL here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;