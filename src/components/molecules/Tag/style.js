import styled from 'styled-components/native'

export const TagContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  height: ${({ theme }) => theme.metrics.px(24)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(6)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  width: auto;
  max-width: ${({ theme }) => theme.metrics.px(100)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`
