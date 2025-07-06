import React from 'react'
import { LogoEvents, LogoPerfil } from './Styles'
import logoEvents from '../../../../assets/LogoText.png'
import logoEeve from '../../../../assets/LogoEeve.png'

const sizes = {
  small: { width: 68, height: 16 },
  medium: { width: 98, height: 22 },
  large: { width: 128, height: 64 },
}

export const Logo = ({ size }) => {
  return <LogoEvents source={logoEvents} size={sizes[size || 'large']} />
}

export const LogoEeve = ({ size }) => {
  return <LogoPerfil source={logoEeve} size={sizes[size || 'large']} />
}
