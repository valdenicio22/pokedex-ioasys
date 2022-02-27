import * as S from './Search.styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { Heart } from '../SvgComponents/Heart/Heart';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

export const Search = () => {
  const navigate = useNavigate();

  return (
    <S.SearchContainer>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <S.BtnFavorites type="button" onClick={() => navigate('/favorites')}>
        <Heart />
      </S.BtnFavorites>
    </S.SearchContainer>
  );
};
