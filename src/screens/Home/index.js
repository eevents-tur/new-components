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
  const { getCities, getCityEvents, getWhatToDo, getLocalCommerce } = useGetData()
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])
  const [cityevents, setCityEvents] = useState([])
  const [whattodo, setWhatToDo] = useState([])
  const [localcommerce, setLocalCommerce] = useState([])

  const callGetData = async () => {
    try {
      const citiesResponse = await getCities()
      const cityeventsResponse = await getCityEvents()
      const whattodoResponse = await getWhatToDo()
      const localcommerceResponse = await getLocalCommerce()

      if (!citiesResponse.error && !cityeventsResponse.error && !whattodoResponse.error && !localcommerceResponse.error) {
        setCities(citiesResponse)
        setCityEvents(cityeventsResponse)
        setWhatToDo(whattodoResponse)
        setLocalCommerce(localcommerceResponse)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false) 
    }
  }

  useEffect(() => {
    callGetData()
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
          cities.length > 0
            ? { ...cities[0] } // Apenas usa a primeira cidade se o array não estiver vazio
            : null // Passa null se não houver cidade
        }
      />
      <HomeList title="Eventos da Cidade" data={cityevents} type="EventoCidade" />
      <HomeList title="O que fazer" data={whattodo} type="OQueFazer" />
      <HomeList title="Comércio Local" data={localcommerce} type="ComercioLocal" />     
    </ScreenScrollContainer>
  )
}
