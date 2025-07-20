import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MyLocationSvg } from '../../../../assets/index'
import styles from './styles'

const MyLocation = ({ mBottom, onPress }) => {
  return (
    <View style={styles(mBottom).view}>
      <TouchableOpacity onPress={onPress} style={styles(mBottom).button}>
        <MyLocationSvg />
      </TouchableOpacity>
    </View>
  )
}

export default MyLocation
