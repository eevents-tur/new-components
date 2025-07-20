import React, { useState, useEffect, useRef } from 'react'
import MapView from 'react-native-maps'
import { Text } from '../../components'
import { StyleSheet, View, Alert } from 'react-native'
import * as Location from 'expo-location'
import SearchCard from '../../components/molecules/SearchCard'
import MyLocation from '../../components/atoms/MyLocation'
import MapTypeCard from '../../components/molecules/MapTypeCard'
import MapType from '../../components/molecules/MapType'
import { UnderConstructionModal } from '../../components/molecules/UnderConstructionModal'
import styles from './styles'

const getMyLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert(
        'Permissão Negada',
        'Por favor, conceda permissão de localização para este aplicativo.'
      )
      return null
    }

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
      maximumAge: 5000,
      timeout: 10000,
    })

    const region = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.035,
      longitudeDelta: 0.035,
    }
    return region
  } catch (error) {
    alert('Não foi possível obter sua localização.')
    console.error('Erro ao tentar obter localização: ', error)
    return null
  }
}

export const SearchScreen = ({ navigation }) => {
  const [showCard, setShowCard] = useState('search')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [cardHeight, setCardHeight] = useState(0)
  const [mapType, setMapType] = useState('standard')
  const mapRef = useRef(null)

  const goToMyLocation = async () => {
    const region = await getMyLocation()
    if (region && mapRef.current) {
      mapRef.current.animateToRegion(region, 1000)
    } else {
      console.error('Região ou mapRef indisponíveis')
    }
  }

  const handleLayoutChange = (event) => {
    const { height } = event?.nativeEvent?.layout || {}
    if (height != null) {
      setCardHeight(height)
    } else {
      console.error('Altura do layout não foi obtida.')
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        onMapReady={goToMyLocation}
        showsMyLocationButton={false}
        mapType={mapType}
        showsUserLocation
      />
      {showCard === 'search' ? (
        <SearchCard
          handleLayoutChange={handleLayoutChange}
          openModal={() => setIsModalVisible(true)}
        />
      ) : (
        <MapTypeCard
          handleLayoutChange={handleLayoutChange}
          closeModal={() => setShowCard('search')}
          changeMapType={(mapType) => setMapType(mapType)}
        />
      )}

      <UnderConstructionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)} // Função para fechar o modal
        type="searchCard"
      />
      <MyLocation mBottom={cardHeight} onPress={goToMyLocation} />
      <MapType
        mBottom={cardHeight + 50}
        onPress={() => setShowCard('mapType')}
      />
    </View>
  )
}
