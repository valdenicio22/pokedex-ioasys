import axios from 'axios';
import { PokeInfo, PokemonCard } from '../types/types';

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

type PokemonBasicInfo = {
  name: string;
  url: string;
};

type PokemonCardByName = {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

const pokemonImgUrl = (pokemonId: PokemonCard['id']) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

export const getPokemonCardData = async () => {
  const responsePokemonNameUrl = await api.get<{ results: PokemonBasicInfo[] }>(
    'pokemon?limit=20&offset=0'
  );
  const pokemonBasicInfoList = responsePokemonNameUrl.data.results;

  const pendingPokemonCard = pokemonBasicInfoList.map((pokemonNameUrl) =>
    getPokemonCardByName(pokemonNameUrl.name)
  );
  const pokemonCard = await Promise.all(pendingPokemonCard);
  return pokemonCard;
};

export const getPokemonCardByName = async (
  pokemonName: PokemonCard['name']
) => {
  const response = await api.get<PokemonCardByName>(
    `pokemon-form/${pokemonName}`
  );
  const pokemonCard = {
    id: response.data.id,
    name: response.data.name,
    img: pokemonImgUrl(response.data.id),
    type: response.data.types[0].type.name,
  };
  return pokemonCard;
};
