import styled from 'styled-components/native'

export const LogoEvents = styled.Image`
  height: ${({ size, theme }) => theme.metrics.px(size?.height || size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size?.width || size)}px;
  margin-right: ${({ theme }) => theme.metrics.px(10)}px; 
  align-self: center;
`
export const LogoPerfil = styled.Image`
  height: 50;
  width: 50;
  border-radius: ${({ theme }) => theme.metrics.px(25)}px;
  margin-left: ${({ theme }) => theme.metrics.px(80)}px;
  align-self: center;
`