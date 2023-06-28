import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.fontFamily.regular,
    paddingVertical: 5,
    color: theme.colors.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.fontFamily.regular,
    paddingVertical: 5,
    color: theme.colors.text,
  },
});
