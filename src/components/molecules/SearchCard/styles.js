import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  touchable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 10, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  searchText: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default styles;