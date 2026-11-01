import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function BackScreen() {
  const data = exercisesData.back;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}