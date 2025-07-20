import styled from 'styled-components/native'

// Logo Texto (LogoTexto)
export const LogoTexto = styled.Image`
  height: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(24) * 0.8 // Escala maior para tablets
      : theme.metrics.px(24)}px;
  width: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(97) * 0.8
      : theme.metrics.px(97)}px;
  align-self: center;
`

// Logo de perfil (LogoEeve)
export const LogoEvents = styled.Image`
  height: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(50) * 0.6 // Escala maior para tablets
      : theme.metrics.px(50)}px;
  width: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(50) * 0.6
      : theme.metrics.px(50)}px;
  border-radius: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(25) * 0.6
      : theme.metrics.px(25)}px;
  margin-left: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(70) * 1.6
      : theme.metrics.px(70)}px;
  align-self: center;
`
