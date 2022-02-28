import { PokemonCard } from '../types/types';

export const formatId = (pokemonId: PokemonCard['id']) => {
  if (pokemonId < 10) return `#00${pokemonId}`;
  if (pokemonId < 100) return `#0${pokemonId}`;
  return `#${pokemonId}`;
};
