//Hooks
import { useEffect, useState } from 'react';
//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { PokeList } from '../../components/PokeList/PokeList';
//Styles
import * as S from './Home.styles';
//Types
import { PokemonCard } from '../../types/types';
//Api Services
import { getPokemonCardData } from '../../service/api';

export const Home = () => {
  const [pokemonCardList, setPokemonCardList] = useState<PokemonCard[]>([]);

  useEffect(() => {
    try {
      getPokemonCardData().then((pokemonCard) => setPokemonCardList(pokemonCard));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <TopHeader />
      <S.HomeContainer>
        <Header />
        <Search />
        <PokeList pokemons={}/>
      </S.HomeContainer>
    </>
  );
};
