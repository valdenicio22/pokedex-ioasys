import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PokemonType } from '../../components/PokemonType/PokemonType';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { getPokemonDataByName } from '../../service/api';
import { Pokemon } from '../../types/types';

import weight from '../../assets/weightIcon.svg';
import ruler from '../../assets/rulerIcon.svg';

import * as S from './PokemonDetails.styles';
import { WeightIcon } from '../../components/SvgComponents/WeightIcon/WeightIcon';
import { RulerIcon } from '../../components/SvgComponents/RulerIcon/RulerIcon';
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    try {
      if (!pokemonName) return;
      getPokemonDataByName(pokemonName).then((pokemonData) =>
        setPokemon(pokemonData)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!pokemon) return <h1>Loadinng ...</h1>;

  const { abilities, height, id, name, sprites, stats, types, weight, about } =
    pokemon;
  return (
    <S.PdContainer pokemonType={types[0].type.name}>
      <S.PdHeader>
        <div>
          <Heart />
          <h2>{name}</h2>
        </div>
        <span>{id}</span>
      </S.PdHeader>

      <S.PdMain>
        <img
          src={sprites.other['official-artwork'].front_default}
          alt={name}
          width="200px"
          height="200px"
        />
        <div className="types">
          {types.map((type) => (
            <PokemonType typeName={type.type.name} />
          ))}
        </div>
        <div className="Peso-Altura-abilidades">
          <div>
            <div>
              <WeightIcon />
              <p>{weight}</p>
              <span>Weight</span>
            </div>
            <div>
              <RulerIcon />
              <p>{height}</p>
              <span>Height</span>
            </div>
            <div>
              {abilities.map((ability) => (
                <p>{ability.ability.name}</p>
              ))}
              <span>Abilities</span>

              <div className="Base Stats"></div>
            </div>
          </div>
        </div>
      </S.PdMain>

      <Link to="/">
        <ReturnArrowIcon />
      </Link>
    </S.PdContainer>
  );
};
