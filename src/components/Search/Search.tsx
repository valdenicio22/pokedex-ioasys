import { ChangeEvent, useEffect, useRef, useState } from 'react';

import * as S from './Search.styles';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { Heart } from '../SvgComponents/Heart/Heart';
import { getPokemonCardInfoById, getPokemonBasicInfo } from '../../service/api';
import { PokemonBasicInfo, PokemonCard } from '../../types/types';

import { useDebounce } from '../../hooks/useDebounce';

export const Search = () => {
  // const MAX_POKEMONS_API = 100; //926
  // const itWasFocus = useRef(false);

  // const navigate = useNavigate();

  // const [pokemonsName, setPokemonsName] = useState<PokemonBasicInfo['name'][]>(
  //   []
  // );

  // const [inputSearch, setInputSearch] = useState('');
  // const debouncedInputSearch = useDebounce({ value: inputSearch, delay: 500 });

  // const [filteredPokemonsCard, setFilteredPokemonsCard] = useState<
  //   PokemonCard[]
  // >([]);

  // const handleInputFocus = () => {
  //   if (itWasFocus.current) return;
  //   getPokemonBasicInfo(MAX_POKEMONS_API).then((response) =>
  //     setPokemonsName(response.map(({ name }) => name))
  //   );
  //   itWasFocus.current = true;
  // };

  // useEffect(() => {
  //   const filteredPokemonsByName = pokemonsName.filter(
  //     (pokemonName) =>
  //       pokemonName.includes(debouncedInputSearch.toLowerCase()) && pokemonName
  //   );

  //   filteredPokemonsByName.map((pokemonName) => {
  //     getPokemonCardByName(pokemonName).then((response) =>
  //       setFilteredPokemonsCard([...filteredPokemonsCard, response])
  //     );
  //   });
  // }, [debouncedInputSearch]);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;
  //   if (!inputValue) return alert('Digite alguma coisa');
  //   setInputSearch(inputValue);
  // };

  // console.log(filteredPokemonsCard);

  return (
    <S.SearchContainer>
      {/* <TextField
        id="demo-helper-text-misaligned-no-helper"
        label="Digite o nome do Pokemon..."
        //autoComplete={pokemonsName}
        color={'primary'}
        onFocus={handleInputFocus}
        onChange={handleChange}
        value={inputSearch}
      />
      <S.BtnFavorites type="button" onClick={() => navigate('/favorites')}>
        <Heart />
      </S.BtnFavorites> */}
    </S.SearchContainer>
  );
};
