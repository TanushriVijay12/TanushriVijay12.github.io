const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-cyan-400">
          Tanushri
        </a>

        <div className="hidden gap-6 text-sm md:flex">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;