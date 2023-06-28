import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants/theme';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
  },
});
