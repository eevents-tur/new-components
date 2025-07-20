import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors'; // Importando as cores

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white, // Usando a cor centralizada
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 12,
  },
  close: {
    zIndex: 1,
  },
  heading: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    fontWeight: '700',
  },
  mapRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  touchable: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
  },
});

export default styles;