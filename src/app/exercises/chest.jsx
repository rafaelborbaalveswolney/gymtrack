import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function ChestScreen() {
  const data = exercisesData.chest;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}