import React from 'react'
import { Text } from '../../../components/atoms'
import { metrics } from '../../../styles/metrics'
import { theme } from '../../../styles/theme'
import { TagContainer } from './style'

export const Tag = ({ children, ...props }) => (
  <TagContainer {...props}>
    <Text fontFamily="bold" size={theme.metrics.responsiveSize(14)}>
      {children}
    </Text>
  </TagContainer>
)
