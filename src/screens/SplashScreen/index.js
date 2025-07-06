import React, { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [navigation])

  return (
    <Container align="center" justify="center" bg="purple">
      <Text fontFamily="bold" size={14} mt={12}>
        Bem Vindo ao Eevents
      </Text>
      <Logo size="small"/>
    </Container>
  )
}