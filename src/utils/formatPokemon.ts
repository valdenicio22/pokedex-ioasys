import { PokemonCard, Pokemon, FormattedPokemon } from '../types/types';

export const formatId = (pokemonId: PokemonCard['id']) => {
  if (pokemonId < 10) return `#00${pokemonId}`;
  if (pokemonId < 100) return `#0${pokemonId}`;
  return `#${pokemonId}`;
};

export const formartPokemon = (pokemon: Pokemon) => {
  const { abilities, height, id, name, sprites, stats, types, weight, about } =
    pokemon;

  const formattedStatNames: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  };

  const formattedPokmeon: FormattedPokemon = {
    abilities: abilities.map(({ ability }) => ability.name),
    height: `${height / 10} m`,
    id: formatId(id),
    name: name,
    img: sprites.other['official-artwork'].front_default,
    stats: stats.reduce((acc, stat, index) => {
      return { ...acc, [formattedStatNames[stat.stat.name]]: stat.base_stat };
    }, {}),
    types: types.map(({ type }) => type.name),
    weight: `${weight / 10} kg`,
    about: about,
  };
  console.log(formartPokemon);
  return formattedPokmeon;
};
