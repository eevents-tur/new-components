import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`
export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const HeroGradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ['transparent', theme.colors.purple],
  start: { x: 0, y: 0 }, // Começa em baixo
  end: { x: 0, y: 1 },   // Termina em cima
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(26)}px;
`
export const ButtonsView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`