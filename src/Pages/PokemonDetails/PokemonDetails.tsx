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
        <S.MainContent>
          <S.TypesContainer>
            {types.map(({ type }) => (
              <PokemonType typeName={type.name} />
            ))}
          </S.TypesContainer>
          <S.DetailsContainer>
            <S.DetailsContent>
              <WeightIcon />
              <span>{weight}</span>
              <p>Weight</p>
            </S.DetailsContent>
            <S.DetailsContent>
              <RulerIcon />
              <span>{height}</span>
              <p>Height</p>
            </S.DetailsContent>
            <S.DetailsContent>
              {abilities.map((ability) => (
                <span>{ability.ability.name}</span>
              ))}

              <div className="abilities">
                <p>Habilidades</p>
              </div>
            </S.DetailsContent>
          </S.DetailsContainer>
          <div className="Base Stats"></div>
        </S.MainContent>
      </S.Main>

      <Link to="/">
        <ReturnArrowIcon />
      </Link>
    </S.Wrapper>
  );
};
