import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  containerTouchable: {
    flex: 1,
    minHeight: 180,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.22,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
  },
  name: {
    fontSize: theme.fonts.fontSize.title,
    fontFamily: theme.fonts.fontFamily.regular,
    color: theme.colors.text,
  },
});
