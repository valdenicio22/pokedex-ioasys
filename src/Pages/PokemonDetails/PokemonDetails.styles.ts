import styled, { css } from 'styled-components'
import { pokemonTypeColor } from '../../utils/pokemons'

type Props = {
  pokemonType: keyof typeof pokemonTypeColor // melhorar tipo
}

// export const PokemonDetailsContainer = styled.div<Props>`
//   width: 428px;
//   margin: 0 auto;
//   padding: 1.6rem 0.8rem;
//   background-color: ${({ theme, pokemonType }) =>
//     theme.pokemonTypeColor[pokemonType]};
// `

//PD = Pokemon Details
export const PdContainer = styled.div<Props>`
  width: 428px;
  margin: 0 auto;
  padding: 1.6rem 0.8rem;

  border: 1px solid black;
`

export const PdHeader = styled.header`
  ${({ theme }) => css`
    width: ${theme.containers.mobile}
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
  `}

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
