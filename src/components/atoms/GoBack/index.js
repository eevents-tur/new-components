import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { GoBackContainer } from './styles'
import { theme } from '../../../styles/theme'

export const GoBack = () => {
  const navigation = useNavigation()
  const iconSize = theme.metrics.isTablet
    ? theme.metrics.px(28) * 0.6 // Reduz para 60% no tablet
    : theme.metrics.px(28) // Tamanho padrão no celular
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={iconSize}
      />
    </GoBackContainer>
  )
}
