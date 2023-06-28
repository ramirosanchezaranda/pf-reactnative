import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginBottom: 20,
  },
  actions: {
    paddingVertical: 5,
  },
});
