import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors'; // Certifique-se de que este path está correto

const styles = (mBottom) =>
  StyleSheet.create({
    view: {
      position: 'absolute',
      right: 18,
      bottom: mBottom ? mBottom + 15 : 0, // Adiciona 15 ao mBottom apenas se ele for fornecido
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: colors.light, // Usando a cor light centralizada
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default styles;