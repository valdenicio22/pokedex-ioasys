import { PokemonBasicInfo } from '../types/types';

//Getting the id of each pokemon out of the correspondent pokemon url
export const getPokemonsIdByUrl = (
  pokemonBasicInfoList: PokemonBasicInfo[]
) => {
  const pokemonId = pokemonBasicInfoList.map(
    (pokemonNameUrl) => +pokemonNameUrl.url.slice(34, -1)
  );
  return pokemonId;
};
