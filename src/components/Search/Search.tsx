import { ChangeEvent, useState } from 'react';

import * as S from './Search.styles';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { Heart } from '../SvgComponents/Heart/Heart';
import { getPokemonCardData, getPokemonBasicInfo } from '../../service/api';
import { PokemonBasicInfo } from '../../types/types';

export const Search = () => {
  const navigate = useNavigate();

  const [pokemonsName, setPokemonsName] = useState<PokemonBasicInfo['name'][]>(
    []
  );

  const handleInputFocus = () => {
    const responsePokemonBasicInfo = getPokemonBasicInfo(500).then(
      (response) => response
    );
    console.log(responsePokemonBasicInfo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue) return alert('Digite alguma coisa');
    const filteredPokemonsInputValue = pokemonsName.filter((pokemonName) =>
      pokemonName.includes(inputValue)
    );
  };

  return (
    <S.SearchContainer>
      <TextField
        id="demo-helper-text-misaligned-no-helper"
        label="Digite o nome do Pokemon..."
        //autoComplete={pokemonsName}
        color={'primary'}
        onFocus={handleInputFocus}
        onChange={handleChange}
      />
      <S.BtnFavorites type="button" onClick={() => navigate('/favorites')}>
        <Heart />
      </S.BtnFavorites>
    </S.SearchContainer>
  );
};
