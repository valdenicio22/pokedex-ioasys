import { ChangeEvent, useEffect, useRef, useState } from 'react';

import * as S from './Search.styles';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { Heart } from '../SvgComponents/Heart/Heart';
import { getPokemonBasicInfo } from '../../service/api';
import { PokemonBasicInfo, PokemonCard } from '../../types/types';
import Autocomplete from '@mui/material/Autocomplete';

import { useDebounce } from '../../hooks/useDebounce';

export const Search = () => {
  const MAX_POKEMONS_API = 1126; //926
  const itWasFocus = useRef(false);

  const navigate = useNavigate();

  const [pokemonsName, setPokemonsName] = useState<PokemonBasicInfo['name'][]>(
    []
  );

  const [inputSearchData, setInputSearchData] = useState('');
  const debouncedInputSearch = useDebounce({
    value: inputSearchData,
    delay: 500,
  });

  const [filteredPokemonsCard, setFilteredPokemonsCard] = useState<
    PokemonCard[]
  >([]);

  const handleInputFocus = () => {
    if (itWasFocus.current) return;
    getPokemonBasicInfo(MAX_POKEMONS_API).then((response) => {
      setPokemonsName(response.map(({ name }) => name));
    });
    itWasFocus.current = true;
  };

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputSearchData = e.target.value;
    if (!inputSearchData) return alert('Digite alguma coisa');
    setInputSearchData(inputSearchData);
  };

  // console.log(filteredPokemonsCard);

  // const top100Films = [
  //   { title: 'The Shawshank Redemption', year: 1994 },
  //   { title: 'The Godfather', year: 1972 },
  //   { title: 'The Godfather: Part II', year: 1974 },
  //   { title: 'The Dark Knight', year: 2008 },
  //   { title: '12 Angry Men', year: 1957 },
  //   { title: "Schindler's List", year: 1993 },
  //   { title: 'Pulp Fiction', year: 1994 },
  //   { title: 'oniChan', year: 2021 },
  // ];

  return (
    <S.SearchContainer>
      <S.Container>
        <Autocomplete
          id="free-solo-demo"
          className="searchAutoComplete"
          freeSolo
          options={pokemonsName.map((pokemonName) => pokemonName)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
          onFocus={handleInputFocus}
          value={inputSearchData}
        />
      </S.Container>
      {/* <TextField
        id="demo-helper-text-misaligned-no-helper"
        label="Digite o nome do Pokemon..."
        //autoComplete={pokemonsName}
        color={'primary'}
        onFocus={handleInputFocus}
        onChange={handleChange}
        value={inputSearch}
      /> */}
      <S.BtnFavorites type="button" onClick={() => navigate('/favorites')}>
        <Heart size={30} color={'primary'} />
      </S.BtnFavorites>
    </S.SearchContainer>
  );
};
