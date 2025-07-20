import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme, size }) => theme.metrics.px(size.w)}px;
  height: ${({ theme, size }) => theme.metrics.px(size.h)}px;
  border-radius: ${({ theme }) => theme.metrics.px(18)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: space-between; /* Para posicionar as tags e o título */
`

export const HeroGradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ['transparent', theme.colors.purple],
  start: { x: 0, y: 0 }, // Começa em baixo
  end: { x: 0, y: 1 }, // Termina em cima
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(10)}px;
`
