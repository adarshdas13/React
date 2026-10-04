function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-[#171717] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#e3350d]">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>

          <div>
            <p className="text-lg font-black tracking-tight">
              POKÉDEX
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
              Generation I
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a
            href="#home"
            className="transition hover:text-[#e3350d]"
          >
            Home
          </a>

          <a
            href="#pokemon"
            className="text-gray-400 transition hover:text-white"
          >
            Pokémon
          </a>

          <a
            href="#about"
            className="text-gray-400 transition hover:text-white"
          >
            About
          </a>
        </div>

        <a
          href="#pokemon"
          className="rounded-lg bg-[#e3350d] px-5 py-2.5 text-sm font-bold transition hover:bg-[#c92f0b]"
        >
          Explore
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
