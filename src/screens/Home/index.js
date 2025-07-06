import React, { useEffect, useState } from 'react'
import {
  ScreenScrollContainer,
  Container,
  HomeList,
  Hero,
  Loader,
} from '../../components'
import { useGetData } from '../../services/hooks'

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    try {
      const filmsResponse = await getFilms()
      const charactersResponse = await getCharacters()

      if (!filmsResponse.error && !charactersResponse.error) {
        setFilms(filmsResponse)
        setCharacters(charactersResponse)
        setLoading(false)
      }
    } catch (error) {
      console.error('Erro ao buscar os dados:', error) // Log do erro para debugar
      setLoading(false) // Atualiza o estado para remover o loader
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  return (
    <ScreenScrollContainer bg="purple">
      <Hero
        item={
          films.length > 0
            ? { ...films[0], type: 'Filme' } // Apenas usa o primeiro filme se o array não estiver vazio
            : null // Passa null se não houver filmes
        }
      />
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
    </ScreenScrollContainer>
  )
}
