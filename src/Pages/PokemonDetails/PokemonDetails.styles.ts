import styled, { css } from 'styled-components'
import { pokemonTypeColor } from '../../utils/pokemons'

type Props = {
  pokemonType: keyof typeof pokemonTypeColor // melhorar tipo
}

//Pd = Pokemon Details
export const PdContainer = styled.div<Props>`
  width: 42.8rem;
  margin: 0 auto;
  padding: 1.6rem 0.8rem;
  height: 100vh;

  background-color: ${({ theme, pokemonType }) =>
    theme.pokemonTypeColor[pokemonType]};
`

export const PdHeader = styled.header`
  width: ${({ theme }) => theme.containers.mobile};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const PdMain = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 50rem;
    background-color: ${theme.colors.white};
  `}
`
