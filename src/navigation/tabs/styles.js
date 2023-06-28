import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.secondary,
    borderTopWidth: 0, // Elimina la línea superior del tab bar
    elevation: 7, // Sombra para dar profundidad
    height: 60, // Altura del tab bar
    paddingBottom: 5, // Espacio inferior para los íconos
    margin: 10,
    borderRadius: 30,
    position: 'absolute',
  },
});
