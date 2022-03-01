//Hooks
import { useEffect, useRef, useState, ChangeEvent } from 'react';
//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList';
//Styles
import * as S from './Home.styles';
//Types
import { PokemonCard, PokemonBasicInfo } from '../../types/types';
//Api Services
import {
  getPokemonBasicInfo,
  getPokemonCardData,
  getPokemonCardDataById,
} from '../../service/api';
import { useDebounce } from '../../hooks/useDebounce';
import { getPokemonsIdByUrl } from '../../utils/getPokemonsIdByUrl';

export const Home = () => {
  const MAX_POKEMONS_API = 1126;

  const itWasFocusRef = useRef(false);

  const [pokemonsListData, setPokemonsListData] = useState<PokemonCard[]>([]);
  const [pokemonsBasicInfo, setPokemonsBasicInfo] = useState<
    PokemonBasicInfo[]
  >([]);
  const [filteredPokemonsCard, setFilteredPokemonsCard] = useState<
    PokemonCard[]
  >([]);
  const [inputSearchData, setInputSearchData] = useState('');
  const [debouncedInputSearchData, setDebouncedInputSearchData] = useState('');

  const debouncedInputSearch = useDebounce(setDebouncedInputSearchData, 600);

  useEffect(() => {
    try {
      getPokemonCardData(20).then((pokemonCard) =>
        setPokemonsListData(pokemonCard)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInputSearchFocus = () => {
    if (itWasFocusRef.current) return;
    getPokemonBasicInfo(MAX_POKEMONS_API).then((response) => {
      setPokemonsBasicInfo(response);
    });
    itWasFocusRef.current = true;
  };

  const handleInputSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputSearchData(e.target.value);
    debouncedInputSearch(e.target.value);
  };

  useEffect(() => {
    const filteredPokemonsByName = pokemonsBasicInfo.filter(
      (pokemonNameUrl) =>
        pokemonNameUrl.name
          .toLowerCase()
          .includes(debouncedInputSearchData.toLowerCase()) && pokemonNameUrl
    );
    const filteredPokemonsId = getPokemonsIdByUrl(filteredPokemonsByName);

    const pendingfilteredPokemonsCardData = filteredPokemonsId.map(
      (pokemonId) => getPokemonCardDataById(pokemonId)
    );
    Promise.all(pendingfilteredPokemonsCardData).then(
      (filteredPokemonsCardData) =>
        setFilteredPokemonsCard(filteredPokemonsCardData)
    );
  }, [debouncedInputSearchData]);

  return (
    <>
      <TopHeader />
      <S.HomeContainer>
        <Header />
        <Search
          handleInputSearchFocus={handleInputSearchFocus}
          handleInputSearchChange={handleInputSearchChange}
          inputSearchData={inputSearchData}
        />
        <PokemonsList
          pokemonsListData={
            filteredPokemonsCard.length !== 0
              ? filteredPokemonsCard
              : pokemonsListData
          }
        />
      </S.HomeContainer>
    </>
  );
};
