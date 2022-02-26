import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonType } from '../../components/PokemonType/PokemonType';
import { Heart } from '../../components/SvgComponents/Heart';
import { getPokemonByName } from '../../service/api';
import { PokeInfo } from '../../types/types';

import weight from '../../assets/weightIcon.svg';
import ruler from '../../assets/rulerIcon.svg';

import * as S from './PokemonDetails.styles';

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokeInfo>();
  /*
  useEffect(() => {
    try {
      if (!pokemonName) return;
      getPokemonByName(pokemonName).then((pokemonData) =>
        setPokemon(pokemonData)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
*/
  return pokemon ? (
    <S.PdContainer pokemonType={pokemon.types[0].type.name}>
      <S.PdHeader>
        <div>
          <Heart width="30" height="30" fill="#EC0344" />
          <h2>{pokemonName}</h2>
        </div>
        <span>{pokemon.id}</span>
      </S.PdHeader>

      <S.PdMain>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width="200px"
          height="200px"
        />
        <div className="types">
          {pokemon.types.map((type) => (
            <PokemonType typeName={type.type.name} />
          ))}
        </div>
        <div className="Peso-Altura-abilidades">
          <div>
            <div>
              <img src={weight} alt="Weight Icon" />
              <p>{pokemon.weight}</p>
              <span>Weight</span>
            </div>
            <div>
              <img src={ruler} alt="Ruler Icon" />
              <p>{pokemon.height}</p>
              <span>Height</span>
            </div>
            <div>
              {pokemon.abilities.map((ability) => (
                <p>{ability.ability.name}</p>
              ))}
              <span>Abilities</span>

              <div className="Base Stats"></div>
            </div>
          </div>
        </div>
      </S.PdMain>

      <button onClick={() => navigate('/')}>voltar</button>
    </S.PdContainer>
  ) : (
    <h1>Loading...</h1>
  );
};
