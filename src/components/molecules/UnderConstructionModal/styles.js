import styled from 'styled-components/native'

export const Modal = styled.Modal``

export const ModalBackgroundContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
  height: ${({ theme }) => theme.metrics.px(226)}px;
  width: ${({ theme }) => theme.metrics.px(226)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`

export const UnderConstructionImage = styled.Image`
  height: ${({ theme }) => theme.metrics.px(120)}px;
  width: ${({ theme }) => theme.metrics.px(120)}px;
`