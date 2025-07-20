import React from 'react'
import { ScreenScrollContainer, Hero, GoBack, Text } from '../../components'
import { useDataStore } from '../../services/stores'
import { theme } from '../../styles/theme'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer bg="purple">
      <Hero item={selectedData} hideContent />
      <Text ml={24} fontFamily="black" color="yellow" size={theme.metrics.responsiveSize(20)}>
        {selectedData.name} {'-'} {selectedData.city} {'/'} {selectedData.state}
      </Text>
      <Text mt={12} ml={24} mr={24} size={14} lh={22}>
        {selectedData.description}
      </Text>
    </ScreenScrollContainer>
  )
}
