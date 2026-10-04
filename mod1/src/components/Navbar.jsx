function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-[#fafafa] px-6 py-4 md:px-10">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white">
          P
        </div>

        <span className="text-lg font-bold tracking-tight text-gray-950">
          Pokédex
        </span>
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex">
        <a href="#" className="text-gray-950 transition hover:text-violet-600">
          Home
        </a>
        <a href="#" className="transition hover:text-violet-600">
          Pokémon
        </a>
        <a href="#" className="transition hover:text-violet-600">
          About
        </a>
      </div>

      <button className="rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
        Explore
      </button>
    </nav>
  );
}

export default Navbar;
