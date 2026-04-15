import profile from "../assets/profile.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20"
    flex flex-col justify-center>
      <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-cyan-400">Hello, I’m</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Tanushri Vijayakumar
          </h1>
          <h2 className="mb-6 text-xl font-semibold text-slate-300 md:text-xl">
            I build machine learning solutions and enjoy exploring data, building pipelines, and solving real problems.
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-400 px-5 py-3 font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
  <div className="h-72 w-72 overflow-hidden rounded-full border border-cyan-400/50 bg-slate-900 shadow-[0_0_120px_rgba(34,211,238,0.25)] md:h-96 md:w-96">
    <img
      src={profile}
      alt="Tanushri Vijayakumar"
      className="h-full w-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Home;