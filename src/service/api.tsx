import axios from 'axios';
import { PokemonType } from '../components/PokemonType/PokemonType';
import { Pokemon, PokemonCard, PokemonBasicInfo } from '../types/types';

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

type PokemonCardByName = {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: keyof typeof PokemonType;
    };
  }>;
};

const pokemonImgUrl = (pokemonId: PokemonCard['id']) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

export const getPokemonBasicInfo = async (limit: number) => {
  const responsePokemonNameUrl = await api.get<{ results: PokemonBasicInfo[] }>(
    `pokemon?limit=${limit}&offset=0`
  );
  const pokemonBasicInfoList = responsePokemonNameUrl.data.results;
  return pokemonBasicInfoList;
};

export const getPokemonCardData = async () => {
  const pokemonBasicInfoList = await getPokemonBasicInfo(20);

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

export const getPokemon = async (pokemonName: Pokemon['name']) => {
  const response = await api.get<Pokemon>(`pokemon/${pokemonName}`);

  console.log(response);
};
