import styled from 'styled-components/native'

export const CustomText = styled.Text`
  text-align: ${({ align }) => align || 'left'};

  font-size: ${({ theme, size }) => {
    const baseSize = size || 14 // Valor padrão para fonte
    return theme.metrics.isTablet
      ? `${theme.metrics.px(baseSize * 1.5)}px` // Ajusta para tablet (1.5x)
      : `${theme.metrics.px(baseSize)}px` // Tamanho padrão em celulares
  }};

  color: ${({ color, theme }) => theme.colors[color] || theme.colors.white};

  margin-top: ${({ theme, mt }) => `${theme.metrics.px(mt || 0)}px`};
  margin-bottom: ${({ theme, mb }) => `${theme.metrics.px(mb || 0)}px`};
  margin-left: ${({ theme, ml }) => `${theme.metrics.px(ml || 0)}px`};
  margin-right: ${({ theme, mr }) => `${theme.metrics.px(mr || 0)}px`};

  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily] || theme.fonts.regular};

  line-height: ${({ theme, lh, size }) => {
    const baseLineHeight = lh || size || 24 // Prioriza o lh (line-height) ou usa o tamanho de fonte
    return theme.metrics.isTablet
      ? `${theme.metrics.px(baseLineHeight * 1.5)}px` // Ajusta para tablet (1.5x)
      : `${theme.metrics.px(baseLineHeight)}px` // Padrão para celulares
  }};
`
