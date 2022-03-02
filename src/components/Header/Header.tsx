//Hooks
import { useState } from 'react';
//Components Material Ui
import Switch from '@mui/material/Switch';
//Styles
import * as S from './Header.styles';
import { Logo } from '../SvgComponents/Logo/Logo';

export const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
    <S.HeaderContainer>
      <Logo />
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </S.HeaderContainer>
  );
};
