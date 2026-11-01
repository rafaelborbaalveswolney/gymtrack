import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function ShouldersScreen() {
  const data = exercisesData.shoulders;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}