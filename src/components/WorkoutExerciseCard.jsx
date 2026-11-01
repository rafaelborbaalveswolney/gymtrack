import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { colors } from '../styles/colors';

export default function WorkoutExerciseCard({
  exercise,
  onComplete,
  onDelete,
}) {
  // Cada exercício começa com 60 segundos
  const [seconds, setSeconds] = useState(60);

  // Controla o cronômetro
  const [isRunning, setIsRunning] = useState(false);

  // Faz a contagem regressiva
  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((current) => current - 1);
      }, 1000);
    }

    // Para ao chegar em zero
    if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  // Formata 60 segundos como 01:00
  function formatTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  }

  // Reinicia o descanso
  function resetTimer() {
    setIsRunning(false);
    setSeconds(60);
  }

  return (
    <View
      style={[
        styles.card,
        exercise.completed && styles.completedCard,
      ]}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.exerciseIcon}>
          <MaterialCommunityIcons
            name={exercise.completed ? 'check' : 'dumbbell'}
            size={25}
            color={
              exercise.completed
                ? colors.success
                : colors.primary
            }
          />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.exerciseName}>
            {exercise.name}
          </Text>

          <Text
            style={[
              styles.status,
              exercise.completed && styles.completedStatus,
            ]}
          >
            {exercise.completed
              ? 'Concluído'
              : 'Pendente'}
          </Text>
        </View>
      </View>

      {/* Informações do exercício */}
      <View style={styles.exerciseDetails}>
        <Text style={styles.detailText}>
          {exercise.sets} séries
        </Text>

        <Text style={styles.separator}>•</Text>

        <Text style={styles.detailText}>
          {exercise.reps} repetições
        </Text>

        <Text style={styles.separator}>•</Text>

        <Text style={styles.detailText}>
          {exercise.weight} kg
        </Text>
      </View>

      {/* Cronômetro */}
      {!exercise.completed && (
        <View style={styles.timerArea}>
          <Text style={styles.timerLabel}>
            Descanso
          </Text>

          <Text style={styles.timer}>
            {formatTime()}
          </Text>

          <View style={styles.timerButtons}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => setIsRunning(!isRunning)}
            >
              <MaterialCommunityIcons
                name={isRunning ? 'pause' : 'play'}
                size={19}
                color={colors.white}
              />

              <Text style={styles.smallButtonText}>
                {isRunning ? 'Pausar' : 'Iniciar'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetTimer}
            >
              <MaterialCommunityIcons
                name="restart"
                size={19}
                color={colors.primary}
              />

              <Text style={styles.resetButtonText}>
                Resetar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Concluir ou reabrir */}
      <TouchableOpacity
        style={[
          styles.completeButton,
          exercise.completed && styles.reopenButton,
        ]}
        onPress={() => onComplete(exercise.id)}
      >
        <MaterialCommunityIcons
          name={
            exercise.completed
              ? 'restore'
              : 'check-circle-outline'
          }
          size={21}
          color={colors.white}
        />

        <Text style={styles.completeButtonText}>
          {exercise.completed
            ? 'Marcar como pendente'
            : 'Concluir exercício'}
        </Text>
      </TouchableOpacity>

      {/* Excluir */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(exercise.id)}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={19}
          color={colors.danger}
        />

        <Text style={styles.deleteText}>
          Excluir
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
  },

  completedCard: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.success,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  exerciseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  headerText: {
    flex: 1,
  },

  exerciseName: {
    color: colors.text,
    fontSize: 19,
    fontWeight: 'bold',
  },

  status: {
    color: colors.warning,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },

  completedStatus: {
    color: colors.success,
  },

  exerciseDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 18,
  },

  detailText: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  separator: {
    color: colors.textSecondary,
    marginHorizontal: 7,
  },

  timerArea: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  timerLabel: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  timer: {
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  timerButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  smallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 9,
  },

  smallButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },

  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 9,
  },

  resetButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },

  completeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.success,
    paddingVertical: 13,
    borderRadius: 10,
  },

  reopenButton: {
    backgroundColor: colors.primary,
  },

  completeButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },

  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 14,
  },

  deleteText: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: 'bold',
  },
});