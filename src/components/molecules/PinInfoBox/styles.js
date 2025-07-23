import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    bottom: 100,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    minWidth: 260,
    zIndex: 20,
  },
  /** Wrapper do conteúdo: imagem e texto lado a lado */
  content: {
    flexDirection: 'row', // Organizar elementos horizontalmente
  },
  /** Estilo da imagem (lado esquerdo) */
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 10,
  },
  /** Seção de texto (lado direito) */
  textSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
    date: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
  },
  desc: {
    marginTop: 8,
    marginBottom: 10,
    color: '#444',
    fontSize: 14,
  },
})
