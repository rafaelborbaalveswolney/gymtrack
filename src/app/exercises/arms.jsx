import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function ArmsScreen() {
  const data = exercisesData.arms;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}