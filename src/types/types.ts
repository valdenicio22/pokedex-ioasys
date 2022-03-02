import { pokemonTypeColor } from '../utils/pokemons';

export type PokemonBasicInfo = {
  name: string;
  url: string;
};

export type PokemonCard = {
  id: number;
  name: string;
  img: string;
  type: keyof typeof pokemonTypeColor;
};

export type Pokemon = {
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
    base_stat: number;
    stat: {
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

export type FormattedPokemon = {
  id: number;
  formattedId: string;
  name: string;
  height: string;
  weight: string;
  about?: string;
  img: string;
  abilities: string[];
  stats: Record<string, number>;
  types: Array<keyof typeof pokemonTypeColor>;
};
