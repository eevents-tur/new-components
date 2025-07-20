import React from 'react'
import { View, Text, StyleSheet } from 'react-native' // Certifique-se de incluir View e Text
import { theme, metrics } from '../styles' // Seu tema personalizado
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Home,
  SplashScreen,
  Detail,
  SearchScreen,
  FavoritesScreen,
} from '../screens'
import { BottomBar, GoBack } from '../components'
import { Logo, LogoEeve } from '../components/atoms/Logo'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({ navigation, route, options }) => (
          // Envolvemos ambos os <View> em um <View> pai
          <View>
            <View style={styles.customHeader}>
            </View>
            {/* Cabeçalho com as imagens */}
            <View style={styles.customHeader}>
              <GoBack />
              <Logo size="medium" />
              <LogoEeve />
            </View>
            {/* Linha branca abaixo */}
            <View style={styles.line} />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={BottomRoute} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  // Estilo para o cabeçalho geral
  customHeader: {
    backgroundColor: theme.colors.purple, // Cor de fundo do cabeçalho
    flexDirection: 'row', // Alinha os elementos na horizontal
    alignItems: 'center', // Centraliza verticalmentes
    paddingHorizontal: theme.metrics.px(145), // Espaçamento horizontal
    paddingVertical: theme.metrics.px(10), // Espaçamento vertical
  },
  // Estilo para a linha branca no final do cabeçalho
  line: {
    width: '90%', // Ocupa 90% da largura
    height: theme.metrics.px(1), // Espessura da linha
    backgroundColor: '#FFF', // Cor branca
    marginTop: theme.metrics.px(0.5), // Espaçamento acima da linha
    alignSelf: 'center', // Centraliza no contêiner
  },
})
