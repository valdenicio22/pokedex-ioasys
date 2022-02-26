import axios from 'axios';
import { PokemonBasicInfo, PokeInfo, PokemonCard } from '../types/types';

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

type PokemonTypeList = {
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

const pokemonImgUrl = (pokemonId: PokemonCard['id']) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

const getPokemonTypeList = async (pokemonId: PokemonCard['id']) => {
  const pokemonFormData = await api.get<PokemonTypeList>(
    `pokemon-form/${pokemonId}`
  );
  const pokemonTypeList = pokemonFormData.data.types[0].type.name;
  return pokemonTypeList;
};

export const getPokemonCardData = async () => {
  const responsePokemonNameUrl = await api.get<{ results: PokemonBasicInfo[] }>(
    'pokemon?limit=20&offset=0'
  );
  const pokemonBasicInfoList = responsePokemonNameUrl.data.results;

  let pokemonIdList: PokemonCard['id'][] = [];
  let pokemonImgList: PokemonCard['img'][] = [];
  pokemonBasicInfoList.forEach((pokemon) => {
    let pokemonId = +pokemon.url.slice(34, -1); // getting the pokemonId out of the url
    if (!pokemonIdList[pokemonId]) pokemonIdList[pokemonId] = pokemonId;
    if (!pokemonImgList[pokemonId])
      pokemonImgList[pokemonId] = pokemonImgUrl(pokemonId);
  });

  const pendingPokemonTypeList = pokemonIdList.map((pokemonId) =>
    getPokemonTypeList(pokemonId)
  );

  const pokemonTypeList = await Promise.all(pendingPokemonTypeList);

  return pokemonIdList.map<PokemonCard>((pokemonId) => ({
    id: pokemonId,
    name: pokemonBasicInfoList[pokemonId - 1].name, // pokemonId starts from 1
    img: pokemonImgList[pokemonId],
    type: pokemonTypeList[pokemonId],
  }));
};

export const getPokemonByName = async (pokemonName: PokeInfo['name']) => {
  const response = await api.get<PokeInfo>(`pokemon/${pokemonName}`);
  return response.data;
};
