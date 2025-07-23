import React, { useState, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, Alert } from 'react-native'
import * as Location from 'expo-location'
import SearchCard from '../../components/molecules/SearchCard'
import MyLocation from '../../components/atoms/MyLocation'
import MapTypeCard from '../../components/molecules/MapTypeCard'
import MapType from '../../components/molecules/MapType'
import { UnderConstructionModal } from '../../components/molecules/UnderConstructionModal'
import styles from './styles'
import database from '../../components/atoms/DataBase'
import PinEevents from '../../../assets/PinEevents.svg'
import PinInfoBox from '../../components/molecules/PinInfoBox'
import InfoBox from '../../components/molecules/InfoBox'

// Marcadores fixos - Esses marcadores precisarão ser substituídos por dados reais ou dinâmicos depois do evento e Iguape
const fixedMarkers = [
  {
    id: 1,
    coordinates: { latitude: -24.70947, longitude: -47.555826 },
    title: 'Festa do Bom Jesus de Iguape',
    description: 'Religioso',
    image: 'https://registrodiario.com.br/images/noticias/257/ac0c34d24848dcc1e422dcd125f1badb.jpg', 
    date:'31/jul',
  },
  {
    id: 2,
    coordinates: { latitude: -24.708924, longitude: -47.554959 },
    title: 'Carnaval de Iguape',
    description: 'Cultural',
    image: 'https://scontent.fcgh12-1.fna.fbcdn.net/v/t39.30808-6/510568167_10063852357024531_3862790249702016675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N5wwkFYNomIQ7kNvwEqlZQ5&_nc_oc=Adk9_tGLnOi2q6ck6s1-dBx4F9R8Mj7RohuVdniTc2BBYQiMlSpAOUg3zJv6HWenvt6w79UFJsSkZcUlOhboUU7_&_nc_zt=23&_nc_ht=scontent.fcgh12-1.fna&_nc_gid=n2K6PBZzf5F0ce2d5n-0JQ&oh=00_AfSRztJ8AXL0w5DFZmLiRzMb-KX3pZ6uNcf9v5cv4SaQZg&oe=6873A4E2', 
    date:'21/fev',
  },
  {
    id: 3,
    coordinates: { latitude: -24.708538, longitude: -47.555793 },
    title: 'Festa do Trabalhador',
    description: 'Cultural',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMW-WI2nQWlQ8nK_jvAmWOrsaoA8jzOemQaLvgY7IjWXCO2aEjFpSXypXLoiXdFkEmSdXRlV4T_S31931EN7goqYaXNPoNMUTj75OdSD88P6nbs15dwUp2j2JHzmKWBdRncDDWXfRKMMGTXJsaoHQcWu7wNow7EaTbI70inyTO-5JqkmtpIqfw4MCnC_4/s16000-rw/festa-do-trabalhador-2025-em-iguape-tera-show-dudu-nobre-neste-02-05%20(1).webp',
    date:'24/abr',
  },
  {
    id: 4,
    coordinates: { latitude: -24.704794, longitude: -47.555996 },
    title: 'Encenação da Paixão de Cristo',
    description: 'Religioso',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1VJrmGnPAxmwS_hyphenhyphenM6l5lPoGeS5UkYYSJxfmpGa5nvOKitzgHMUpz7pQ0oeYXt7QZWJUv80UtAEaLu2sfLS7WOb_3rx7O7AWZZr9p4mmlg6j2KvCMeyeYH8bB_2kx4__kqC2NF3Tx0HNp/s1600/Vanda+Alves+%25283%2529.jpg',
    date:'18/abr',
  },
  {
    id: 5,
    coordinates: { latitude: -24.704329935795045, longitude: -47.55270022838742 },
    title: 'Revelando',
    description: 'Cultural',
    image: 'https://www.cultura.sp.gov.br/wcm/connect/91d24514-6643-47c1-9c0d-30fdc710270a/Revelando%2BSP%2BSJC-Adriano%2BEscanhuela%2B%281%29.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-91d24514-6643-47c1-9c0d-30fdc710270a-ptBE093', // Imagem de exemplo
    date:'18/jun',
  },
]

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
      accuracy: Location.Accuracy.Balanced,
      maximumAge: 1000,
      timeout: 5000,
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
  //  const markers = database.markers // array de marcadores do banco de dados variaveis - voltar depois do evento
  const [markers, setMarkers] = useState(fixedMarkers) // Use o array fixo aqui
  const [selectedMarker, setSelectedMarker] = useState(null) // Estado para o marcador selecionado

  const goToMyLocation = async () => {
    const region = await getMyLocation()
    if (region && mapRef.current) {
      mapRef.current.animateToRegion(region, 300)
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
        mapType={mapType}
        showsUserLocation
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            anchor={{ x: 0.5, y: 1 }}
            onPress={() => setSelectedMarker(marker)} // Atualiza o marcador selecionado
          >
            <PinEevents width={30} height={30} />
          </Marker>
        ))}
      </MapView>
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
      <PinInfoBox // Exibe a caixa de informações do marcador
        marker={selectedMarker}
        onClose={() => setSelectedMarker(null)}
      />
    </View>
  )
}
