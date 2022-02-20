import styled from 'styled-components'
import { pokemonTypeColor } from '../../utils/pokemons'

type Props = {
  pokemonType: keyof typeof pokemonTypeColor // melhor tipo
}

export const CardContainer = styled.div<Props>`
  width: 10.4rem;
  height: 11.2rem;

  display: flex;
  flex-flow: column nowrap;

  border: 1px solid
    ${({ theme, pokemonType }) => theme.pokemonTypeColor[pokemonType]};
  border-radius: ${({ theme }) => theme.border.radius};
`

export const CardHeader = styled.header<Props>`
  height: 1.2rem;
  margin: 0.4rem 0.8rem 0rem;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme, pokemonType }) => theme.pokemonTypeColor[pokemonType]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 1.2rem;
  }
`

export const CardImg = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  margin: 0 auto;
`

export const CardFooter = styled.footer<Props>`
  height: 2.4rem;
  border-radius: 0rem 1rem 1rem 0rem;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background-color: ${({ theme, pokemonType }) =>
    theme.pokemonTypeColor[pokemonType]};
`
