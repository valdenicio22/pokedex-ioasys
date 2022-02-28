import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PokemonType } from '../../components/PokemonType/PokemonType';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { getPokemonDataByName } from '../../service/api';
import { Pokemon } from '../../types/types';

import * as S from './PokemonDetails.styles';
import { WeightIcon } from '../../components/SvgComponents/WeightIcon/WeightIcon';
import { RulerIcon } from '../../components/SvgComponents/RulerIcon/RulerIcon';
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';
import { formatId } from '../../utils/formatPokemon';

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
    <S.Wrapper pokemonType={types[0].type.name}>
      <S.HeaderContainer>
        <div>
          <Heart />
          <h2>{name}</h2>
        </div>
        <span>{formatId(id)}</span>
      </S.HeaderContainer>
      <S.ImgContainer>
        <img src={sprites.other['official-artwork'].front_default} alt={name} />
      </S.ImgContainer>
      <S.Main>
        <div className="types">
          {types.map(({ type }) => (
            <PokemonType typeName={type.name} />
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
      </S.Main>

      <Link to="/">
        <ReturnArrowIcon />
      </Link>
    </S.Wrapper>
  );
};
