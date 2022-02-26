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

const getPokemonImgList = async (pokemonId: PokemonCard['id']) => {
  const pokemonImgData = await axios.get<string>(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
  );
  const pokemonImgList = pokemonImgData.data;
  return pokemonImgList;
};

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

  let pokemonIdList: PokeInfo['id'][] = [];
  pokemonBasicInfoList.forEach(
    (pokemon) => pokemonIdList.push(+pokemon.url.slice(34, -1)) // getting the pokemonId out of the url
  );
  const pendingPokemonTypeList = pokemonIdList.map((pokemonId) =>
    getPokemonTypeList(pokemonId)
  );
  const pendingPokemonImgList = pokemonIdList.map((pokemonId) =>
    getPokemonImgList(pokemonId)
  );
  const pokemonTypeList = await Promise.all(pendingPokemonTypeList);
  const pokemonImgList = await Promise.all(pendingPokemonImgList);

  const pokemonCard = pokemonIdList.map<PokemonCard>((pokemonId) => ({
    id: pokemonId,
    name: pokemonBasicInfoList[pokemonId - 1].name, // pokemonId starts from 1
    img: pokemonImgList[pokemonId - 1],
    type: pokemonTypeList[pokemonId - 1],
  }));
  return pokemonCard.map((card) => card);
};

export const getPokemonByName = async (pokemonName: PokeInfo['name']) => {
  const response = await api.get<PokeInfo>(`pokemon/${pokemonName}`);
  return response.data;
};

// const responsePokemonImgList = await Promise.all(
//   getPokemonImgList(pokemonIdList),
//   getPokemonTypeList(pokemonIdList)
// )

// const pokemonCard: PokemonCard[] = pokemonIdList.map((id, index) => {
//   return {
//     id: id,
//     name: pokemonList[index].name,
//     img: responsePokemonImgList[index].data,
//   }
// })

// return pokemonCard.map((Card) => Card)
