import { StyleSheet, Dimensions } from 'react-native';

import { theme } from './../../constants';
const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 30,
    minHeight: height,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.fonts.fontSize.title,
    fontFamily: theme.fonts.fontFamily.bold,
  },
  detailContainer: {
    paddingVertical: 10,
  },
  selectedItem: {
    color: theme.colors.text,
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.bold,
    paddingTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteMessage: {
    color: theme.colors.text,
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.regular,
  },
  delete: {
    marginVertical: 10,
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 50,
    height: 80,
    width: 80,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MapPreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginBottom: 20,
  },
  date: {
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 0,
    backgroundColor: theme.colors.white,
    maxHeight: height * 0.4,
    minWidth: '98%',
  },
  secondContainer: { width: '98%', marginTop: 5, backgroundColor: 'white', padding: 10 },
  total: {
    color: theme.colors.text,
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.bold,
    paddingTop: 10,
  },
});
