import styled, { css } from 'styled-components';
import { pokemonTypeColor } from '../../utils/pokemons';
import pokeball from '../../assets/pokeball.svg';

type Props = {
  pokemonType: keyof typeof pokemonTypeColor;
};

export const Wrapper = styled.div<Props>`
  width: 42.8rem;
  padding: 1.6rem 0.8rem;
  height: 100vh;

  background-color: ${({ theme, pokemonType }) =>
    theme.pokemonTypeColor[pokemonType]};
`;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    margin: 0 3.2rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};

    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const ImgContainer = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 20rem;
    height: 20rem;
  }
`;

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 51rem;

    margin-top: -6rem;

    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.large};
    box-shadow: 0.5px 5px 20px 0 rgba(0, 0, 0, 0.3);
  `}
`;

export const MainContent = styled.div`
  width: ${({ theme }) => theme.containers.mobile};
  margin: 0 auto;
  padding-top: 6rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 3rem 0;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(6.5rem, min-content)) auto;
  grid-template-rows: min-content min-content;
  gap: 3rem;
`;

export const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    font-size: 1.2rem;
    display: block;
    text-align: center;
    margin-top: -0.5rem;
    color: rgba(178, 178, 178, 1);
  }
  .abilities {
    width: 100%;
  }
`;
