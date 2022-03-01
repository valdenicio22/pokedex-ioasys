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

import theme from '../../styles/theme';
//Material UI
import LinearProgress from '@mui/material/LinearProgress';

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

  //if (types[0] === 'normal' && types.length > 1) types[1]);

  return (
    <S.Wrapper pokemonType={types[0]}>
      <S.HeaderContainer>
        <div>
          <Heart size={20} color={'white'} />
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
              <div>
                <WeightIcon />
                <span>{weight}</span>
              </div>
              <p>Weight</p>
            </S.DetailsContent>
            <S.DetailsContent>
              <div>
                <RulerIcon />
                <span>{height}</span>
              </div>
              <p>Height</p>
            </S.DetailsContent>
            <S.DetailsContent className="abilities">
              {abilities.map((ability, i) => {
                console.log(i, abilities.length);
                if (i + 1 === abilities.length) return <span>{ability}</span>;
                return <span>{`${ability} /`}&nbsp;</span>;
              })}

              <div>
                <p>Habilidades</p>
              </div>
            </S.DetailsContent>
          </S.DetailsContainer>
          <div className="Base Stats"></div>
          <S.AboutContainer>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </S.AboutContainer>

          <S.StatsContainer>
            <h2>Base Stats</h2>
            {Object.keys(stats).map((statKey) => {
              const valueStat = stats[statKey];
              return (
                <div>
                  <span>{statKey}</span>
                  <span className="valueStats">{valueStat}</span>
                  <span className="progressBar">
                    <LinearProgress
                      value={valueStat}
                      variant="determinate"
                      sx={{ width: '70%' }}
                    />
                  </span>
                </div>
              );
            })}
          </S.StatsContainer>
          <Link to="/" className="returnIcon">
            <ReturnArrowIcon />
          </Link>
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  );
};
