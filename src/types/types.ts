import { pokemonTypeColor } from '../utils/pokemons';

export type PokemonCard = {
  id: number;
  name: string;
  img: string;
  type: keyof typeof pokemonTypeColor;
};

export type PokeInfo = {
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  height: number;
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: Array<{
    baseStat: number;
    Stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: keyof typeof pokemonTypeColor;
    };
  }>;
  weight: number;
  about?: string;
};
