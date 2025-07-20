import styled from 'styled-components/native'
import { theme } from '../../../styles/theme'
import { metrics } from '../../../styles/metrics'

export const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ theme, size }) => {
    const baseSize = size || 84 // Valor padrão para fonte
    return theme.metrics.isTablet
      ? `${theme.metrics.px(baseSize * 0.7)}px` // Ajusta para tablet (1.5x)
      : `${theme.metrics.px(baseSize)}px` // Tamanho padrão em celulares
  }};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
    padding-bottom: ${({ theme, size }) => {
    const baseSize = size || 36 // Valor padrão para fonte
    return theme.metrics.isTablet
      ? `${theme.metrics.px(baseSize * 0.7)}px` // Ajusta para tablet (1.5x)
      : `${theme.metrics.px(baseSize)}px` // Tamanho padrão em celulares
  }};
`

export const BarItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
