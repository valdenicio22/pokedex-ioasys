import * as S from './Header.styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import logoIoasys from '../../assets/logoIoasys.svg';

export const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={logoIoasys} alt="Logo Ioasys" />
      </S.LogoContainer>

      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </S.HeaderContainer>
  );
};
