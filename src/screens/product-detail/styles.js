import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants/theme';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  name: {
    fontFamily: theme.fonts.fontFamily.bold,
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: theme.fonts.fontFamily.regular,
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: theme.fonts.fontFamily.bold,
    paddingVertical: 20,
  },
  imageContainer: {
    width: '100%',
    height: height * 0.3,
    backgroundColor: theme.colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
