import { pokemonTypeColor } from '../utils/pokemons'

export default {
  border: {
    radius: '0.8rem',
  },
  font: {
    family: 'Poppins, sans-serif',
    weight: {
      regular: 400,
      semiBold: 500,
      bold: 700,
    },
    sizes: {
      xsmall: '1.2rem', // 12px
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem', // 24px
    },
  },
  colors: {
    primary: '#EC0344',
    lightModeBg: '#FFFFFF',
    darkModeBg: '#212121',
    white: '#FFFFFF',
    lightGray: '#E0E0E0',
    mediumGray: '#BDBDBD',
    darkGray: '#666666',
  },
  pokemonTypeColor,
  containers: {
    mobile: '34.8rem', //428px - 80 = 348px
  },
} as const
