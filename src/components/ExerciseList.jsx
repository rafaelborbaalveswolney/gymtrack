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

export default function ExerciseList({ title, exercises }) {
  return (
    <View style={[commonStyles.screen, styles.container]}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>
        Escolha um exercício para configurar
      </Text>

      {exercises.map((exercise) => (
        <TouchableOpacity
          key={exercise.name}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/exercise-config',
              params: { name: exercise.name },
            })
          }
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={exercise.icon}
              size={26}
              color={colors.primary}
            />
          </View>

          <Text style={styles.exerciseText}>
            {exercise.name}
          </Text>

          <MaterialCommunityIcons
            name="chevron-right"
            size={28}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
      ))}

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
    backgroundColor: colors.surface,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  exerciseText: {
    flex: 1,
    color: colors.text,
    fontSize: 17,
    fontWeight: 'bold',
  },
});