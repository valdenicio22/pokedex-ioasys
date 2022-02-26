//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { PokeList } from '../../components/PokeList/PokeList';

export const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Search />
      <PokeList />
    </>
  );
};
