import * as S from './Heart.styles';

//Improve type using the theme
export type LogoProps = {
  color?: 'primary' | 'white';
};

export const Heart = ({ color = 'primary' }: LogoProps) => {
  return (
    <S.Wrapper color={color}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
          fill="currentColor"
        />
      </svg>
    </S.Wrapper>
  );
};
