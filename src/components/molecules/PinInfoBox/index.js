import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const PinInfoBox = ({ marker, onClose }) => {
  // Executa ao montar o componente e define o fechamento automático
  useEffect(() => {
    if (marker) {
      const timer = setTimeout(() => {
        onClose() // Chama a função de fechamento automaticamente após 3 segundos
      }, 3000) // 3000ms = 3 segundos

      // Limpeza do timeout caso o componente seja desmontado antes dos 3 segundos
      return () => clearTimeout(timer)
    }
  }, [marker])
  // Se não houver um marcador selecionado, não renderiza nada
  if (!marker) return null
  return (
    <View style={styles.container}>
      {/* Layout dividido em duas seções */}
      <View style={styles.content}>
        {/* Imagem à esquerda */}
        <Image
          source={{
            uri:
              marker.image ||
              'https://tse1.mm.bing.net/th/id/OIP.uuAfYbHbWMNrUc2FxuLZQQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Texto à direita */}
        <View style={styles.textSection}>
          <Text style={styles.title}>{marker.title || 'Evento'}</Text>
          {marker.description && (
            <Text style={styles.desc}>
              Categoria: {marker.description}
            </Text>
          )}
          {marker.date && (
            <Text style={styles.date}>Data do Evento: {marker.date}</Text>
          )}
        </View>
      </View>
    </View>
  )
}

export default PinInfoBox
