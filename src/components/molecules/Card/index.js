import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CardContainer, CardImage, HeroGradient } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../../../services/stores'
import { theme } from '../../../styles' // Importando o theme global
import { Text } from '../../../components/atoms'
import { metrics } from '../../../styles'

export const Card = ({ item, size }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  // Extrair dados do item
  const { image_url, name, date, category, address, source } = item

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  const sizes = theme.metrics.isTablet
    ? {
        small: {
          h: theme.metrics.px(150) * 0.5,
          w: theme.metrics.px(153) * 0.5,
        },
        large: {
          h: theme.metrics.px(200) * 0.5,
          w: theme.metrics.px(315) * 0.5,
        },
      }
    : {
        small: {
          h: theme.metrics.px(150),
          w: theme.metrics.px(153),
        },
        large: {
          h: theme.metrics.px(200),
          w: theme.metrics.px(315),
        },
      }

  const cardSize = size ? sizes[size] : sizes.small

  return (
    <CardContainer onPress={onSelectItem} size={cardSize}>
      {/* Imagem principal de fundo */}
      <CardImage source={{ uri: image_url }}>
        {item.type === 'EventoCidade' && (
          <>
            <View style={styles.tags}>
              <Text
                fontFamily="bold"
                size={theme.metrics.responsiveSize(14)}
                style={[styles.tag, styles.alignLeft]}
              >
                {date}
              </Text>
              <Text
                fontFamily="bold"
                size={theme.metrics.responsiveSize(14)}
                style={[styles.tag, styles.alignRight]}
              >
                {category}
              </Text>
            </View>
            <HeroGradient>
              <View style={styles.nameContainer}>
                <Text
                  fontFamily="bold"
                  mb="62"
                  ml="6"
                  size={theme.metrics.responsiveSize(14)}
                  style={styles.name}
                >
                  {name}
                </Text>
              </View>
            </HeroGradient>
          </>
        )}
        {item.type === 'OQueFazer' && (
          <>
            <HeroGradient>
              <View style={styles.nameContainer}>
                <Text
                  fontFamily="bold"
                  mb="6"
                  ml="6"
                  size={theme.metrics.responsiveSize(10)}
                  style={styles.name}
                >
                  {name}
                </Text>
                <Text
                  fontFamily="regular"
                  ml="6"
                  mb="6"
                  size={theme.metrics.responsiveSize(8)}
                  style={styles.address}
                >
                  {address}
                </Text>
              </View>
            </HeroGradient>
          </>
        )}
        {item.type === 'ComercioLocal' && (
          <>
            <View style={styles.tags}>
              <Text
                fontFamily="bold"
                size={theme.metrics.responsiveSize(10)}
                style={[styles.tag, styles.alignRight]}
              >
                {category}
              </Text>
            </View>
            <HeroGradient>
              <View style={styles.nameContainer}>
                <Text
                  fontFamily="bold"
                  mb="6"
                  ml="6"
                  size={theme.metrics.responsiveSize(10)}
                  style={styles.name}
                >
                  {name}
                </Text>
                <Text
                  fontFamily="regular"
                  ml="6"
                  mb="50"
                  size={theme.metrics.responsiveSize(8)}
                  style={styles.address}
                >
                  {address}
                </Text>
              </View>
            </HeroGradient>
          </>
        )}
      </CardImage>
    </CardContainer>
  )
}

const styles = StyleSheet.create({
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Garante que as tags fiquem nas extremidades esquerda e direita
    padding: theme.metrics.px(10),
  },
  tag: {
    backgroundColor: theme.colors.purple, // Cor de fundo roxa
    paddingHorizontal: theme.metrics.px(15),
    paddingVertical: theme.metrics.px(8),
    borderRadius: theme.metrics.px(15),
  },
  alignLeft: {
    marginRight: 'auto', // Garante que a tag fique na extrema esquerda
  },
  alignRight: {
    marginLeft: 'auto', // Garante que a tag fique na extrema direita
  },
  nameContainer: {
    flex: 1, // Garante que o container ocupe todo o espaço do gradiente
    justifyContent: 'flex-end', // Alinha o texto para baixo
  },
})
