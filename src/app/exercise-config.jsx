import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { addExercise } from '../services/storage';
import { colors } from '../styles/colors';
import { commonStyles } from '../styles/commonStyles';

export default function ExerciseConfigScreen() {
  // Recebe o nome do exercício escolhido
  const { name } = useLocalSearchParams();

  // Valores digitados pelo usuário
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  // Salva o exercício no treino
  async function handleAddExercise() {
    // Verifica campos vazios
    if (!sets || !reps || !weight) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    // Converte os valores digitados
    const setsNumber = Number(sets);
    const repsNumber = Number(reps);

    // Aceita carga usando ponto ou vírgula
    const weightNumber = Number(
      weight.replace(',', '.')
    );

    // Validação das séries
    if (
      !Number.isInteger(setsNumber) ||
      setsNumber <= 0
    ) {
      Alert.alert(
        'Atenção',
        'Informe uma quantidade válida de séries.'
      );
      return;
    }

    // Validação das repetições
    if (
      !Number.isInteger(repsNumber) ||
      repsNumber <= 0
    ) {
      Alert.alert(
        'Atenção',
        'Informe uma quantidade válida de repetições.'
      );
      return;
    }

    // Validação da carga
    if (
      Number.isNaN(weightNumber) ||
      weightNumber <= 0
    ) {
      Alert.alert(
        'Atenção',
        'Informe uma carga válida.'
      );
      return;
    }

    // Objeto que será salvo
    const exercise = {
      id: Date.now().toString(),
      name: name,
      sets: setsNumber,
      reps: repsNumber,
      weight: weightNumber,
    };

    // Tenta salvar no armazenamento local
    const saved = await addExercise(exercise);

    // Impede exercício duplicado
    if (!saved) {
      Alert.alert(
        'Exercício já adicionado',
        `${name} já está na sua ficha.`
      );
      return;
    }

    // Confirma o cadastro
    Alert.alert(
      'Sucesso',
      'Exercício adicionado ao treino.',
      [
        {
          text: 'OK',
          onPress: () => router.push('/workouts'),
        },
      ]
    );
  }

  return (
    <View style={[commonStyles.screen, styles.container]}>
      {/* Nome do exercício */}
      <Text style={styles.title}>
        {name}
      </Text>

      <Text style={styles.subtitle}>
        Configure seu exercício
      </Text>

      {/* Séries */}
      <Text style={styles.label}>
        Séries
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 3"
        keyboardType="numeric"
        value={sets}
        onChangeText={setSets}
      />

      {/* Repetições */}
      <Text style={styles.label}>
        Repetições
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 10"
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
      />

      {/* Carga */}
      <Text style={styles.label}>
        Carga (kg)
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 30"
        keyboardType="decimal-pad"
        value={weight}
        onChangeText={setWeight}
      />

      {/* Adicionar ao treino */}
      <TouchableOpacity
        style={commonStyles.button}
        onPress={handleAddExercise}
      >
        <Text style={commonStyles.buttonText}>
          Adicionar ao treino
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

// Estilos específicos desta tela
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
});