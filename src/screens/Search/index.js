import React, { useState, useEffect } from 'react'
import { ScreenScrollContainer, Text, GridList, Input } from '../../components'
import { useGetData } from '../../services/hooks'

export const SearchScreen = () => {
  const { getSearchResult } = useGetData()
  const [loading, setLoading] = useState()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const callGetSearchResult = async () => {
    setLoading(true)
    const result = await getSearchResult(query)
    if (!result.error) {
      setResults(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
  }, [query])

  return (
    <ScreenScrollContainer bg="purple" withPadding>
      <Text fontFamily="bold" size={28} mb={24} mt={12} ml={20}>
        Pesquisar
      </Text>
      <Input
        mb={24}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Pesquise por filme ou personagem"
      />
      <GridList loading={loading} data={results} type="search" />
    </ScreenScrollContainer>
  )
}
