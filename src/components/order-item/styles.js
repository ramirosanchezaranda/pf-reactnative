import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    fontFamily: theme.fonts.fontFamily.regular,
    color: theme.colors.text,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {},
  total: {
    fontSize: 15,
    fontFamily: theme.fonts.fontFamily.bold,
    color: theme.colors.text,
  },
});
