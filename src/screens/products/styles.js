import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants/theme';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.fontFamily.bold,
    fontSize: theme.fonts.fontSize.title,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  label: {
    fontFamily: theme.fonts.fontFamily.regular,
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingVertical: 20,
    textAlign: 'center',
  },
});
