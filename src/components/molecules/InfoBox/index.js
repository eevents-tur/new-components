import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// Dimensões da tela do dispositivo
const { width } = Dimensions.get('window');

const InfoBox = () => {
  return (
    <View style={styles.container}>
      {/* Lado esquerdo com a imagem */}
      <Image
        source={{
          uri: 'https://via.placeholder.com/150', // Substitua esta URL pela imagem desejada
        }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Lado direito com o texto */}
      <View style={styles.textContainer}>
        {/* Header com o título e botão de fechar */}
        <View style={styles.header}>
          <Text style={styles.title}>Título do Local</Text>
          <TouchableOpacity onPress={() => console.log('Botão fechar pressionado')}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
        </View>

        {/* Descrição do local */}
        <Text style={styles.description}>
          Descrição curta sobre o local ou endereço.{'\n'}
          Mais informações sobre o ambiente.
        </Text>

        {/* Horários ou informações adicionais */}
        <Text style={styles.footer}>Horário de funcionamento: 08:00 - 22:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Disposição lado a lado
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 12, // Bordas arredondadas
    overflow: 'hidden', // Cortar bordas excedentes
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
    width: width * 0.9, // 90% da largura da tela
    height: 150, // Altura fixa do box
    marginVertical: 10,
  },
  image: {
    width: '40%', // A imagem ocupa 40% do `container`
    height: '100%', // Preenche a altura total
  },
  textContainer: {
    flex: 1, // Ocupa o restante do espaço
    padding: 10, // Espaço interno
    justifyContent: 'space-between', // Espaçamento entre os elementos
  },
  header: {
    flexDirection: 'row', // Título e botão lado a lado
    justifyContent: 'space-between', // Separar título do botão
    alignItems: 'center', // Alinhar verticalmente
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Cor do título
  },
  closeButton: {
    fontSize: 18,
    color: '#999', // Cor do botão
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666', // Cor da descrição
    lineHeight: 200, // Altura de linha para melhor leitura
  },
  footer: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333', // Cor do texto inferior
  },
});

export default InfoBox;