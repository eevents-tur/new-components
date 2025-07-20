import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MapTypeSvg } from '../../../../assets';
import styles from './styles'; 

const MapType = (props) => {
  const { mBottom, onPress } = props;
  return (
    <View style={styles(mBottom).view}>
      <TouchableOpacity onPress={onPress} style={styles().button}>
        <MapTypeSvg />
      </TouchableOpacity>
    </View>
  );
};

export default MapType;