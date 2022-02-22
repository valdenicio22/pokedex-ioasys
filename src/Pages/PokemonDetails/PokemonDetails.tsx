import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Heart } from '../../components/SvgComponents/Heart'
import { getPokemonByName } from '../../service/api'
import { PokeInfo } from '../../types/types'

import * as S from './PokemonDetails.styles'

export const PokemonDetails = () => {
  const navigate = useNavigate()
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState<PokeInfo>()

  useEffect(() => {
    try {
      if (!pokemonName) return
      getPokemonByName(pokemonName).then((pokemonData) =>
        setPokemon(pokemonData)
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

  return pokemon ? (
    <S.PdContainer pokemonType={pokemon.types[0].type.name}>
      <S.PdHeader>
        <div>
          <Heart width="30" height="30" fill="#EC0344" />
          <h2>{pokemonName}</h2>
        </div>
        <span>{pokemon.id}</span>
      </S.PdHeader>

      <div>
        <img src="" alt="" />
        <div>
          {' '}
          type
          <div>Grass</div>
          <div>Poison</div>
        </div>
        <div></div>
      </div>

      <button onClick={() => navigate('/')}>voltar</button>
    </S.PdContainer>
  ) : (
    <h1>Loading...</h1>
  )
}
