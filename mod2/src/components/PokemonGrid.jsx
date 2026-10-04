import { useEffect, useState } from "react";
import { getPokemon, getPokemonList } from "../services/pokeapi";
import PokemonCard from "./PokemonCard";

const POKEMON_PER_PAGE = 12;

function PokemonGrid() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const totalPages = Math.ceil(totalPokemon / POKEMON_PER_PAGE);

  useEffect(() => {
    async function loadPokemon() {
      setLoading(true);
      setError("");

      try {
        const offset = (currentPage - 1) * POKEMON_PER_PAGE;

        const data = await getPokemonList(
          POKEMON_PER_PAGE,
          offset
        );

        setTotalPokemon(data.count);

        const pokemonData = await Promise.all(
          data.results.map((item) => getPokemon(item.url))
        );

        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
        setError("Unable to connect to the Pokédex.");
      } finally {
        setLoading(false);
      }
    }

    loadPokemon();
  }, [currentPage]);

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: document.getElementById("pokemon").offsetTop - 80,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg font-bold text-[#e3350d]">
            {error}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Please check your internet connection and try again.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="pokemon" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e3350d]">
              Pokédex Database
            </p>

            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-[#171717]">
              Kanto Pokémon
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Browse all 151 Pokémon from the Kanto region.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <p className="font-mono text-xs text-gray-400">
              TOTAL ENTRIES
            </p>

            <p className="mt-1 text-xl font-black text-gray-900">
              {String(totalPokemon).padStart(3, "0")}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: POKEMON_PER_PAGE }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-125 animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
                />
              )
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pokemon.map((item) => (
              <PokemonCard
                key={item.id}
                pokemon={item}
              />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </section>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pages = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(
    totalPages,
    currentPage + 2
  );

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#e3350d] hover:text-[#e3350d] disabled:cursor-not-allowed disabled:opacity-30"
      >
        ←
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#e3350d] hover:text-[#e3350d]"
          >
            1
          </button>

          {startPage > 2 && (
            <span className="px-2 text-gray-400">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
            currentPage === page
              ? "bg-[#e3350d] text-white"
              : "border border-gray-200 text-gray-700 hover:border-[#e3350d] hover:text-[#e3350d]"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-gray-400">
              ...
            </span>
          )}

          <button
            onClick={() => onPageChange(totalPages)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#e3350d] hover:text-[#e3350d]"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#e3350d] hover:text-[#e3350d] disabled:cursor-not-allowed disabled:opacity-30"
      >
        →
      </button>
    </div>
  );
}

export default PokemonGrid;