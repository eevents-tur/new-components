import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import mapSatellitePng from '../../../../assets/map_satellite.png';
import mapStandardPng from '../../../../assets/map_standard.png';
import mapTerrainPng from '../../../../assets/map_terrain.png';
import { CloseSvg } from '../../../../assets';
import styles from './styles'; 

const MapTypeCard = ({ handleLayoutChange, closeModal, changeMapType }) => {
  return (
    <View onLayout={handleLayoutChange} style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity onPress={closeModal} style={styles.close}>
          <CloseSvg />
        </TouchableOpacity>
        <Text style={styles.heading}>TIPO DE MAPA</Text>
      </View>
      <View style={styles.mapRow}>
        <TouchableOpacity onPress={() => changeMapType('standard')} style={styles.touchable}>
          <Image source={mapStandardPng} style={styles.image} />
          <Text>Padrão</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeMapType('terrain')} style={styles.touchable}>
          <Image source={mapTerrainPng} style={styles.image} />
          <Text>Terreno</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeMapType('satellite')} style={styles.touchable}>
          <Image source={mapSatellitePng} style={styles.image} />
          <Text>Satélite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapTypeCard;