import * as S from './Header.styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

export const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={logo} alt="Logo Ioasys" />
        <h1>ioasys pokédex</h1>
      </S.LogoContainer>

      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </S.HeaderContainer>
  );
};
