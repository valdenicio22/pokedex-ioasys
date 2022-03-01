//Hooks
import { useEffect, useRef, useState, ChangeEvent } from 'react';
//Custom hooks
import { useDebounce } from '../../hooks/useDebounce';
import { useMediaQuery } from 'react-responsive';
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
//Utils
import { getPokemonsIdByUrl } from '../../utils/getPokemonsIdByUrl';

export const Home = () => {
  const MAX_POKEMONS_API = 1126;

  const itWasFocusRef = useRef(false);

  const [initialPokemonsCardList, setInitialPokemonsCardList] = useState<
    PokemonCard[]
  >([]);
  const [pokemonsBasicInfo, setPokemonsBasicInfo] = useState<
    PokemonBasicInfo[]
  >([]);
  const [filteredPokemonsCard, setFilteredPokemonsCard] = useState<
    PokemonCard[]
  >([]);
  const [inputSearchData, setInputSearchData] = useState('');
  const [debouncedInputSearchData, setDebouncedInputSearchData] = useState('');

  const debouncedInputSearch = useDebounce(setDebouncedInputSearchData, 300);

  const isMobile = useMediaQuery({ query: '(max-width: 428px)' });
  const qtdInicialValue = isMobile ? 15 : 20;
  const [pokemonQuantity, setPokemonQuantity] = useState(qtdInicialValue);

  useEffect(() => {
    try {
      getPokemonCardData(pokemonQuantity).then((pokemonCard) =>
        setInitialPokemonsCardList(pokemonCard)
      );
    } catch (error) {
      console.log(error);
    }
  }, [pokemonQuantity]);

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
    if (!debouncedInputSearchData) return;

    const filteredPokemonsByName = pokemonsBasicInfo.filter(
      (pokemonNameUrl) =>
        pokemonNameUrl.name
          .toLowerCase()
          .includes(debouncedInputSearchData.toLowerCase()) && pokemonNameUrl
    );
    const filteredPokemonsId = getPokemonsIdByUrl(
      filteredPokemonsByName.slice(0, 50)
    );

    const pendingfilteredPokemonsCardData = filteredPokemonsId.map(
      (pokemonId) => getPokemonCardDataById(pokemonId)
    );
    Promise.all(pendingfilteredPokemonsCardData).then(
      (filteredPokemonsCardData) =>
        setFilteredPokemonsCard(filteredPokemonsCardData)
    );
  }, [debouncedInputSearchData]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPokemonQuantity((previousValue) => previousValue + 6);
      }
    });
    const sentinela = document?.querySelector('#poke-card-sentinela')!;
    intersectionObserver.observe(sentinela);
    return () => intersectionObserver.disconnect();
  }, []);

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
            !!debouncedInputSearchData
              ? filteredPokemonsCard
              : initialPokemonsCardList
          }
        />
        <div
          style={{ backgroundColor: 'red', height: '2rem' }}
          id="poke-card-sentinela"
        />
      </S.HomeContainer>
    </>
  );
};
