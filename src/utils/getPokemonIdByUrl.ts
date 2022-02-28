import { PokemonBasicInfo } from '../types/types';

type getPokemonsIdByUrlProps = {
  pokemonBasicInfoList: PokemonBasicInfo[];
};

//Getting the id of each pokemon out of the correspondent pokemon url
export const getPokemonsIdByUrl = ({
  pokemonBasicInfoList,
}: getPokemonsIdByUrlProps) => {
  const pokemonId = pokemonBasicInfoList.map(
    (pokemonNameUrl) => +pokemonNameUrl.url.slice(34, -1)
  );
  return pokemonId;
};
