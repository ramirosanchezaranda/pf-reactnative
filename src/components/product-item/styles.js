import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  containerTouchable: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRightColor: theme.colors.background,
    borderRightWidth: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'flex-start',
    textAlign: 'right',
    padding: 10,
    width: '70%',
  },
  name: {
    fontSize: theme.fonts.fontSize.title,
    fontFamily: theme.fonts.fontFamily.regular,
    paddingBottom: 5,
  },
  price: {
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.bold,
    alignSelf: 'flex-end',
  },
});
