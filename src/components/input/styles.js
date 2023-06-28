import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 13,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: theme.fonts.fontFamily.regular,
    color: theme.colors.text,
    paddingVertical: 5,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: theme.fonts.fontFamily.regular,
    paddingVertical: 5,
    color: theme.colors.red,
  },
});
