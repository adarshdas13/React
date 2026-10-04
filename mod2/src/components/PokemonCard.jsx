const typeColors = {
  grass: "#78C850",
  poison: "#A040A0",
  fire: "#F08030",
  flying: "#A890F0",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
};

function PokemonCard({ pokemon }) {
  const primaryType = pokemon.types[0].type.name;
  const color = typeColors[primaryType] || "#737373";

  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      <div
        className="relative h-64 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}25, #ffffff)`,
        }}
      >
        <p className="absolute left-5 top-5 z-20 font-mono text-sm font-bold text-gray-400">
          #{String(pokemon.id).padStart(3, "0")}
        </p>

        <div
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `${color}35` }}
        />

        <img
          src={image}
          alt={pokemon.name}
          className="absolute left-1/2 top-1/2 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#171717]">
            {pokemon.name}
          </h2>

          <div className="flex flex-wrap justify-end gap-1">
            {pokemon.types.map((item) => {
              const type = item.type.name;
              const typeColor = typeColors[type] || "#737373";

              return (
                <span
                  key={type}
                  className="rounded-md px-2 py-1 text-[10px] font-black uppercase"
                  style={{
                    backgroundColor: `${typeColor}20`,
                    color: typeColor,
                  }}
                >
                  {type}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Height
            </p>

            <p className="mt-1 font-mono text-sm font-bold text-gray-800">
              {(pokemon.height / 10).toFixed(1)} m
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Weight
            </p>

            <p className="mt-1 font-mono text-sm font-bold text-gray-800">
              {(pokemon.weight / 10).toFixed(1)} kg
            </p>
          </div>
        </div>

        <button className="mt-6 w-full rounded-lg border border-gray-200 bg-gray-50 py-3 text-xs font-black uppercase tracking-wider text-gray-700 transition hover:border-[#e3350d] hover:bg-[#e3350d] hover:text-white">
          View Pokédex Entry
        </button>
      </div>
    </article>
  );
}

export default PokemonCard;