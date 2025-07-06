import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtomItemView,
} from './styles'
import { Text, Logo } from '../../../components/atoms'
import {
  Tag,
  IconButton,
  WatchButton,
  FavoriteStateModal,
} from '../../../components/molecules'
import { colors } from '../../../styles/colors'
import { useFavorites } from '../../../services/hooks'
import { useDataStore } from '../../../services/stores'

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(true)
  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const addDataToFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const removeDataFromFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.purple, 'transparent', colors.purple]}>
          <Tag mt={onDetail ? 240 : 200}> {type} </Tag>
          <Text fontFamily="bold" size={28} mt={12}>
            {' '}
            {title}{' '}
          </Text>
          <Text size={18}> {subtitle} </Text>
          <ButtonsView>
            <IconButton
              onPress={() =>
                isFavorite ? removeDataFromFavorite() : addDataToFavorite()
              }
              label={isFavorite ? 'Rem. Favoritos' : 'Add Favoritos'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
            />
            {!onDetail && (
              <IconButton
                onPress={onPressDetail}
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
      {!!showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => setShowFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  )
}
