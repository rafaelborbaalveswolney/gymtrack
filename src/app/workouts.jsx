import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import WorkoutExerciseCard from '../components/WorkoutExerciseCard';

import {
  getWorkout,
  removeExercise,
  toggleExerciseCompleted,
} from '../services/storage';

import { colors } from '../styles/colors';
import { commonStyles } from '../styles/commonStyles';

export default function WorkoutsScreen() {
  // Lista de exercícios salvos
  const [workout, setWorkout] = useState([]);

  // Carrega os exercícios salvos
  async function loadWorkout() {
    const data = await getWorkout();
    setWorkout(data);
  }

  // Atualiza a lista sempre que a tela for aberta
  useFocusEffect(
    useCallback(() => {
      loadWorkout();
    }, [])
  );

  // Altera entre pendente e concluído
  async function handleCompleteExercise(id) {
    await toggleExerciseCompleted(id);

    // Atualiza a lista na tela
    await loadWorkout();
  }

  // Pergunta antes de excluir
  function handleDeleteExercise(id) {
    Alert.alert(
      'Excluir exercício',
      'Deseja remover este exercício do treino?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await removeExercise(id);
            await loadWorkout();
          },
        },
      ]
    );
  }

  // Quantidade de exercícios concluídos
  const completedExercises = workout.filter(
    (exercise) => exercise.completed
  ).length;

  return (
    <View style={[commonStyles.screen, styles.container]}>
      {/* Cabeçalho */}
      <Text style={styles.title}>
        Meus Treinos
      </Text>

      <Text style={styles.subtitle}>
        Acompanhe sua ficha e conclua cada exercício.
      </Text>

      {/* Resumo do treino */}
      {workout.length > 0 && (
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>
            Progresso
          </Text>

          <Text style={styles.progressText}>
            {completedExercises} de {workout.length} exercícios concluídos
          </Text>
        </View>
      )}

      {/* Caso não exista exercício */}
      {workout.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Sua ficha está vazia
          </Text>

          <Text style={styles.emptyText}>
            Adicione exercícios para começar seu treino.
          </Text>
        </View>
      ) : (
        <FlatList
          data={workout}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <WorkoutExerciseCard
              exercise={item}
              onComplete={handleCompleteExercise}
              onDelete={handleDeleteExercise}
            />
          )}
        />
      )}

      {/* Adicionar exercício */}
      <TouchableOpacity
        style={commonStyles.button}
        onPress={() => router.push('/exercises')}
      >
        <Text style={commonStyles.buttonText}>
          Adicionar exercício
        </Text>
      </TouchableOpacity>

      {/* Voltar */}
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
    paddingTop: 60,
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    marginBottom: 20,
  },

  progressCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.success,
  },

  progressTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  progressText: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  emptyText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: 'center',
  },

  list: {
    paddingBottom: 18,
  },
});