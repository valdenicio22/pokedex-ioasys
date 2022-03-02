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
import { pokemonTypeColor } from '../../utils/pokemons';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../../components/Header/Header';
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';

function addAlpha(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 428.5px)' });
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<FormattedPokemon>();
  const { toggleFavoritePokemons, checkPokemonOnFavoriteList } =
    useFavoritesPokemons();

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

  if (!pokemon) return <h1>Loading ...</h1>;

  const {
    id,
    formattedId,
    img,
    abilities,
    height,
    name,
    stats,
    types,
    weight,
  } = pokemon;

  const type = types[0] === 'normal' && types.length > 1 ? types[1] : types[0];
  const isFavorite = checkPokemonOnFavoriteList(pokemon.id);

  return (
    <S.Wrapper pokemonType={type}>
      {isMobile ? (
        <>
          <S.HeaderContainer>
            <div>
              <button
                onClick={() =>
                  toggleFavoritePokemons({
                    id,
                    img,
                    name,
                    type: types[0],
                  })
                }
              >
                <Heart size={20} color={isFavorite ? 'primary' : 'white'} />
              </button>
              <h2>{name}</h2>
            </div>
            <span>{formattedId}</span>
          </S.HeaderContainer>
          <S.ImgContainer>
            <img src={img} alt={name} />
          </S.ImgContainer>
        </>
      ) : (
        <>
          <TopHeader pokemonType={type} />
          <S.HeaderContainerDesktop>
            <Header />
          </S.HeaderContainerDesktop>
        </>
      )}

      <S.Main pokemonType={type}>
        {!isMobile && (
          <div className="boxPokemon">
            <img src={img} alt={name} />
          </div>
        )}
        <S.MainContent>
          {!isMobile && (
            <S.HeaderContainer pokemonType={type}>
              <div>
                <button
                  onClick={() =>
                    toggleFavoritePokemons({
                      id,
                      img,
                      name,
                      type: types[0],
                    })
                  }
                >
                  <Heart size={20} color={isFavorite ? 'primary' : 'white'} />
                </button>
                <h2>{name}</h2>
              </div>
              <span>{formattedId}</span>
            </S.HeaderContainer>
          )}
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

          <S.StatsContainer pokemonType={type}>
            <h2>Base Stats</h2>
            {Object.keys(stats).map((statKey) => {
              const valueStat = stats[statKey];
              return (
                <div>
                  <span className="keyStats">{statKey}</span>
                  <span className="valueStats">{valueStat}</span>
                  <span className="progressBar">
                    <LinearProgress
                      value={valueStat}
                      variant="determinate"
                      sx={{
                        height: '0.8rem',
                        backgroundColor: addAlpha(pokemonTypeColor[type], 0.2),
                        width: '100%',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: pokemonTypeColor[type],
                        },
                      }}
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
