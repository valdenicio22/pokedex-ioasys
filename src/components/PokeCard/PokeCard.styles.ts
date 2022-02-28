import styled, { css } from 'styled-components';
import { pokemonTypeColor } from '../../utils/pokemons';

type Props = {
  pokemonType: keyof typeof pokemonTypeColor;
};

export const CardContainer = styled.div<Props>`
  ${({ theme, pokemonType }) => css`
    display: grid;
    grid-template-rows: 1.2rem auto 2.4rem;

    border: 1px solid ${theme.pokemonTypeColor[pokemonType]}};

    border-radius: ${theme.border.radius.medium};

    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.6rem;
  `}
`;

export const CardHeader = styled.header<Props>`
  ${({ theme, pokemonType }) => css`
    padding: 0.6rem 0.8rem 0rem;

    color: ${theme.pokemonTypeColor[pokemonType]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      background-color: transparent;
    }

    span {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`;

export const CardImg = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  margin: 0 auto;
`;

export const CardFooter = styled.footer<Props>`
  ${({ theme, pokemonType }) => css`
    padding: 0.4rem 0.8rem 0rem;
    text-align: center;
    text-transform: capitalize;
    color: ${theme.colors.white};
    background-color: ${theme.pokemonTypeColor[pokemonType]};
    border-radius: 0 0 0.7rem 0.7rem;
  `}
`;
export const CardBtn = styled.button`
  border: none;
  background-color: transparent;
`;
