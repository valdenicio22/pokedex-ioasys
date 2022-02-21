import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Heart } from '../../components/SvgComponents/Heart'
import { getPokemonByName } from '../../service/api'
import { PokeInfo } from '../../types/types'

export const PokemonDetails = () => {
  const navigate = useNavigate()
  const { pokemonName } = useParams()

  const [pokemon, setPokemon] = useState<PokeInfo>()

  useEffect(() => {
    getPokemonByName(pokemonName!).then((pokemonData) =>
      setPokemon(pokemonData)
    )
  }, [])

  return (
    <header>
      <Heart width="30" height="30" fill="#EC0344" />
      <p>The pokermon name is : {pokemonName} </p>
      <button onClick={() => navigate('/')}>voltar</button>
    </header>
  )
}
