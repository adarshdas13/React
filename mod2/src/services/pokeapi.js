const API_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(limit = 12, offset = 0) {
  const response = await fetch(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  return response.json();
}

export async function getPokemon(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  return response.json();
}
