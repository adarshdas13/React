function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f5f5f5]"
    >
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#e3350d]" />
            Pokédex System Online
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tighter text-[#171717] sm:text-6xl md:text-8xl">
            Discover
            <br />
            <span className="text-[#e3350d]">Pokémon.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Explore the original Pokémon from the Kanto region.
            Browse their types, stats, abilities, evolutions, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pokemon"
              className="rounded-lg bg-[#e3350d] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#c92f0b]"
            >
              Open Pokédex
            </a>

            <div className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-600">
              #001 — #009
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;