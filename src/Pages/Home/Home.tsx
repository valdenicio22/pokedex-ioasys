//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { PokeList } from '../../components/PokeList/PokeList';
//Styles
import * as S from './Home.styles';

export const Home = () => {
  return (
    <>
      <TopHeader />
      <S.HomeContainer>
        <Header />
        <Search />
        <PokeList />
      </S.HomeContainer>
    </>
  );
};
