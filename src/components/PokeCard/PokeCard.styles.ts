import styled from 'styled-components'

// type CardProps = {
//   pokeType:
//     | 'rock'
//     | 'ghost'
//     | 'steel'
//     | 'water'
//     | 'grass'
//     | 'phychic'
//     | 'ice'
//     | 'dark'
//     | 'fairy'
//     | 'normal'
//     | 'fighting'
//     | 'flying'
//     | 'poison'
//     | 'ground'
//     | 'bug'
//     | 'fire'
//     | 'electric'
//     | 'dragon'
// }

export const CardContainer = styled.div`
  width: 10.4rem;
  height: 11.2rem;

  display: flex;
  flex-flow: column nowrap;

  border: 1px solid #74cb48;
  border-radius: ${({ theme }) => theme.border.radius};
`

export const CardHeader = styled.header`
  height: 1.2rem;
  margin: 0.4rem 0.8rem 0rem;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: #74cb48;

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

export const CardFooter = styled.footer`
  height: 2.4rem;
  border-radius: 0rem 1rem 1rem 0rem;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background-color: #74cb48;
`
