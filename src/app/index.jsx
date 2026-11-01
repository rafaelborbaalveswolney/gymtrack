import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../styles/colors';
import { commonStyles } from '../styles/commonStyles';

export default function HomeScreen() {
  return (
    <View style={[commonStyles.screen, styles.container]}>

      {/* Ícone principal */}
      <View style={styles.logo}>
        <MaterialCommunityIcons
          name="dumbbell"
          size={56}
          color={colors.white}
        />
      </View>

      {/* Nome do aplicativo */}
      <Text style={styles.title}>
        GymTrack
      </Text>

      {/* Frase principal */}
      <Text style={styles.subtitle}>
        Organize, acompanhe e conclua seus treinos.
      </Text>

      {/* Pequeno card informativo */}
      <View style={styles.infoCard}>
        <MaterialCommunityIcons
          name="clipboard-check-outline"
          size={30}
          color={colors.primary}
        />

        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>
            Seu treino em um só lugar
          </Text>

          <Text style={styles.infoText}>
            Exercícios, séries, cargas e descanso.
          </Text>
        </View>
      </View>

      {/* Botão principal */}
      <TouchableOpacity
        style={[commonStyles.button, styles.button]}
        onPress={() => router.push('/workouts')}
      >
        <MaterialCommunityIcons
          name="weight-lifter"
          size={22}
          color={colors.white}
        />

        <Text style={commonStyles.buttonText}>
          Ver meus treinos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },

  title: {
    color: colors.text,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 35,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 18,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: colors.border,

    // Sombra no Android
    elevation: 2,
  },

  infoTextContainer: {
    flex: 1,
    marginLeft: 15,
  },

  infoTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  infoText: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});