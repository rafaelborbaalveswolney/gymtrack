import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../../styles/colors';
import { commonStyles } from '../../styles/commonStyles';

export default function ExercisesScreen() {
  return (
    <View style={[commonStyles.screen, styles.container]}>
      {/* Título da tela */}
      <Text style={styles.title}>
        Escolher Exercícios
      </Text>

      <Text style={styles.subtitle}>
        Selecione um grupo muscular
      </Text>

      {/* Peito */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.chest }]}
        onPress={() => router.push('/exercises/chest')}
      >
        <MaterialCommunityIcons
          name="arm-flex"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Peito
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Costas */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.back }]}
        onPress={() => router.push('/exercises/back')}
      >
        <MaterialCommunityIcons
          name="human-handsup"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Costas
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Braços */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.arms }]}
        onPress={() => router.push('/exercises/arms')}
      >
        <MaterialCommunityIcons
          name="arm-flex-outline"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Braços
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Pernas */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.legs }]}
        onPress={() => router.push('/exercises/legs')}
      >
        <MaterialCommunityIcons
          name="run"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Pernas
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Glúteos */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.glutes }]}
        onPress={() => router.push('/exercises/glutes')}
      >
        <MaterialCommunityIcons
          name="human"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Glúteos
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Ombros */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.shoulders }]}
        onPress={() => router.push('/exercises/shoulders')}
      >
        <MaterialCommunityIcons
          name="weight-lifter"
          size={32}
          color={colors.white}
        />

        <Text style={styles.cardText}>
          Ombros
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity
        style={commonStyles.backButton}
        onPress={() => router.back()}
      >
        <Text style={commonStyles.backButtonText}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 25,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 14,
    marginBottom: 12,

    // Pequena sombra no Android
    elevation: 2,
  },

  cardText: {
    flex: 1,
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});