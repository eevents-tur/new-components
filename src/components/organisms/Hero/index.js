import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroContainer, HeroImageBackground, HeroGradient } from './styles'
import { Text } from '../../../components/atoms'
import { theme } from '../../../styles/theme'
import { colors } from '../../../styles/colors'
import { useFavorites } from '../../../services/hooks'
import { useDataStore } from '../../../services/stores'

export const Hero = ({ item, onDetail, hideContent = false }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(true)
  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, state, description } = item

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.purple, 'transparent', colors.purple]}>
          {!hideContent && ( // Exibe apenas se `hideContent` for false
            <>
              <Text
                fontFamily="bold"
                size={theme.metrics.responsiveSize(36)}
                mt={theme.metrics.isTablet ? 120 : 150}
                ml={70}
              >
                {' '}
                {title}
                {' / '}
                {state}
              </Text>
              <Text
                fontFamily="regular"
                lh={theme.metrics.responsiveSize(20)}
                size={theme.metrics.responsiveSize(14)}
                mt={theme.metrics.isTablet ? 90 : 150}
              >
                {description.substring(0, 300)}
                {description.length > 500 ? '...' : ''}
              </Text>
            </>
          )}
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
