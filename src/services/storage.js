import AsyncStorage from '@react-native-async-storage/async-storage';

// Chave usada para salvar a ficha no celular
const STORAGE_KEY = '@gymtrack_workout';

// Busca todos os exercícios salvos
export async function getWorkout() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Erro ao buscar treino:', error);
    return [];
  }
}

// Adiciona um exercício
export async function addExercise(exercise) {
  try {
    const currentWorkout = await getWorkout();

    // Verifica se o exercício já existe
    const exerciseExists = currentWorkout.some(
      (item) => item.name === exercise.name
    );

    if (exerciseExists) {
      return false;
    }

    // Todo exercício novo começa como pendente
    const newExercise = {
      ...exercise,
      completed: false,
    };

    const updatedWorkout = [
      ...currentWorkout,
      newExercise,
    ];

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedWorkout)
    );

    return true;
  } catch (error) {
    console.log('Erro ao salvar exercício:', error);
    return false;
  }
}

// Remove um exercício
export async function removeExercise(id) {
  try {
    const currentWorkout = await getWorkout();

    const updatedWorkout = currentWorkout.filter(
      (exercise) => exercise.id !== id
    );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedWorkout)
    );
  } catch (error) {
    console.log('Erro ao remover exercício:', error);
  }
}

// Altera o status do exercício
export async function toggleExerciseCompleted(id) {
  try {
    const currentWorkout = await getWorkout();

    const updatedWorkout = currentWorkout.map((exercise) => {
      if (exercise.id === id) {
        return {
          ...exercise,
          completed: !exercise.completed,
        };
      }

      return exercise;
    });

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedWorkout)
    );
  } catch (error) {
    console.log('Erro ao atualizar exercício:', error);
  }
}