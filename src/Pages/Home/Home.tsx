//Hooks
import { useEffect, useState } from 'react';
//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList';
//Styles
import * as S from './Home.styles';
//Types
import { PokemonCard } from '../../types/types';
//Api Services
import { getPokemonCardData } from '../../service/api';

export const Home = () => {
  const [pokemonsListData, setPokemonsListData] = useState<PokemonCard[]>([]);

  useEffect(() => {
    try {
      getPokemonCardData(20).then((pokemonCard) =>
        setPokemonsListData(pokemonCard)
      );
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
        <PokemonsList pokemonsListData={pokemonsListData} />
      </S.HomeContainer>
    </>
  );
};
