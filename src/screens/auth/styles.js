import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    minHeight: 400,
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.fontFamily.bold,
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.text,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  link: {
    padding: 5,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  linkText: {
    fontFamily: theme.fonts.fontFamily.regular,
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
  },
  submitContainer: {
    paddingVertical: 5,
  },
});
