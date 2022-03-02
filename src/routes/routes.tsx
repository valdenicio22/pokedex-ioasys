import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Favorites } from '../Pages/Favorites/Favorites';
import { PokemonDetails } from '../Pages/PokemonDetails/PokemonDetails';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/pokemonDetails/:pokemonName" element={<PokemonDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default routes;
