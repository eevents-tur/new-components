import { StyleSheet } from 'react-native';
import { colors } from "../../../styles/colors";

const styles = (mBottom) =>
  StyleSheet.create({
    view: {
      position: 'absolute',
      right: 18,
      bottom: mBottom ? mBottom + 15 : 0,
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: colors.light,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default styles;