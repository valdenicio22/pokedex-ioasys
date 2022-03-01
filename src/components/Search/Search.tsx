import { ChangeEvent, useEffect, useRef, useState } from 'react';

import * as S from './Search.styles';

// import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { Heart } from '../SvgComponents/Heart/Heart';

type SearchProps = {
  handleInputSearchFocus: () => void;
  handleInputSearchChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputSearchData: string;
};

export const Search = ({
  handleInputSearchFocus,
  handleInputSearchChange,
  inputSearchData,
}: SearchProps) => {
  const navigate = useNavigate();

  return (
    <S.SearchContainer>
      <S.Container>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onFocus={handleInputSearchFocus}
          onChange={(e) => handleInputSearchChange(e)}
          value={inputSearchData}
          sx={{
            width: '100%',
          }}
        />
        {/* <SearchIcon /> */}
      </S.Container>
      <S.BtnFavorites type="button" onClick={() => navigate('/favorites')}>
        <Heart size={30} color={'primary'} />
      </S.BtnFavorites>
    </S.SearchContainer>
  );
};
