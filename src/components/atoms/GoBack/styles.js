import styled from 'styled-components/native'

export const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(24) * 0.6
      : theme.metrics.px(24)}px;
  padding-left: ${({ theme }) =>
    theme.metrics.isTablet
      ? theme.metrics.px(24) * 0.6
      : theme.metrics.px(24)}px;
`