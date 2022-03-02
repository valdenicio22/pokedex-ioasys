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
    theme.pokemonTypeColor[pokemonType!]};

  @media (min-width: 428.5px) {
    width: 100%;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const HeaderContainerDesktop = styled.div`
  width: 83rem;
  margin: 7rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type HeaderProps = {
  pokemonType?: keyof typeof pokemonTypeColor;
};
export const HeaderContainer = styled.header<HeaderProps>`
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
      text-transform: capitalize;
    }
  `}
  @media(min-width: 428.5px) {
    ${({ theme, pokemonType }) => css`
      color: ${pokemonType
        ? theme.pokemonTypeColor[pokemonType]
        : theme.colors.white};
    `}
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 20rem;
    height: 20rem;
  }
`;

type MainProps = {
  pokemonType?: keyof typeof pokemonTypeColor;
};

export const Main = styled.main<MainProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 51rem;

    margin-top: -6rem;

    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.large};
    box-shadow: 0.5px 5px 20px 0 rgba(0, 0, 0, 0.3);
  `}

  @media(min-width: 428.5px) {
    box-shadow: none;
    border-radius: none;
    width: 100%;
    height: 100%;

    margin-top: 0;

    display: flex;

    .boxPokemon {
      width: 43.5rem;
      height: 100vh;
      background-color: ${({ theme, pokemonType }) =>
        pokemonType
          ? theme.pokemonTypeColor[pokemonType]
          : theme.colors.primary};
    }
    img {
      margin-top: 10rem;
      margin-left: 15rem;
    }
  }
`;

export const MainContent = styled.div`
  width: ${({ theme }) => theme.containers.mobile};
  margin: 0 auto;
  padding-top: 6rem;

  .returnIcon {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 3rem;
  }
  @media (min-width: 428.5px) {
    margin: 0 22rem;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 3rem 0;
  text-transform: capitalize;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(6.5rem, min-content)) auto;
  gap: 2.5rem;
`;

export const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &.abilities {
    text-transform: capitalize;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    span {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    color: rgba(178, 178, 178, 1);
  }
`;

export const AboutContainer = styled.div`
  padding-top: 3rem;
`;

export const StatsContainer = styled.div<Props>`
  padding-bottom: 3rem;

  h2 {
    padding: 3rem 0 2rem;
  }

  div {
    ${({ theme, pokemonType }) => css`
      display: flex;
      align-items: center;

      color: ${theme.pokemonTypeColor[pokemonType]};
      font-size: ${theme.font.sizes.small};

      .keyStats {
        width: 6rem;
        border-right: 1px solid black;
        font-weight: ${theme.font.weight.semiBold};
      }
      .valueStats {
        color: black;
        padding-left: 1rem;
      }

      .progressBar {
        width: 100%;

        margin-left: 1.4rem;
      }
    `}
  }
`;
