import React, { useState, useEffect } from 'react'
import { Text } from '../../../components/atoms'
import { View, TouchableOpacity } from 'react-native'
import { UnderConstructionModal } from '../UnderConstructionModal'
import { SearchSvg } from '../../../../assets/index'
import styles from './styles'

const SearchCard = ({ handleLayoutChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false) // Controle interno do modal

  // useEffect para fechar o modal automaticamente após 5 segundos
  useEffect(() => {
    let timeout;
    if (isModalVisible) {
      // Configura um timer para fechar o modal após 5 segundos
      timeout = setTimeout(() => {
        setIsModalVisible(false); // Fecha o modal
      }, 2000);
    }
    // Limpa o timer se o modal for fechado antes de 5 segundos
    return () => clearTimeout(timeout);
  }, [isModalVisible]);

  return (
    <View onLayout={handleLayoutChange} style={styles.card}>
      {/* Conteúdo do SearchCard */}

      {/* Botão para abrir o modal */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)} 
        style={styles.touchable} 
      >
        <SearchSvg />
        <Text  color="black" align="center" size={18} fontFamily="bold">
          Procurar Cidade do Evento
        </Text>
      </TouchableOpacity>

      {/* UnderConstructionModal */}
      <UnderConstructionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)} 
      />
    </View>
  )
}

export default SearchCard
