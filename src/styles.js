import { StyleSheet } from 'react-native';

import { theme } from './constants/theme';

export const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
});
