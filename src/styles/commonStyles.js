import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const commonStyles = StyleSheet.create({
  // Fundo padrão das telas
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },

  // Botão principal
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 12,
    alignItems: 'center',
  },

  // Texto do botão
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Botão voltar
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },

  // Texto voltar
  backButtonText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});