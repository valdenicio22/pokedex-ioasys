import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PokemonType } from '../../components/PokemonType/PokemonType';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { getPokemonDataByName } from '../../service/api';
import { FormattedPokemon } from '../../types/types';

import * as S from './PokemonDetails.styles';
import { WeightIcon } from '../../components/SvgComponents/WeightIcon/WeightIcon';
import { RulerIcon } from '../../components/SvgComponents/RulerIcon/RulerIcon';
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';
import { formartPokemon } from '../../utils/formatPokemon';

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<FormattedPokemon>();

  useEffect(() => {
    try {
      if (!pokemonName) return;
      getPokemonDataByName(pokemonName).then((pokemonData) =>
        setPokemon(formartPokemon(pokemonData))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!pokemon) return <h1>Loadinng ...</h1>;

  const { id, img, abilities, height, name, stats, types, weight, about } =
    pokemon;
  return (
    <S.Wrapper pokemonType={types[0]}>
      <S.HeaderContainer>
        <div>
          <Heart size={20} color={'white'} /> //Passar prop
          <h2>{name}</h2>
        </div>
        <span>{id}</span>
      </S.HeaderContainer>
      <S.ImgContainer>
        <img src={img} alt={name} />
      </S.ImgContainer>
      <S.Main>
        <S.MainContent>
          <S.TypesContainer>
            {types.map((type) => (
              <PokemonType typeName={type} />
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
                <span>{ability}</span>
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
