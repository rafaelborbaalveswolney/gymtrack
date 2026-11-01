import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function GlutesScreen() {
  const data = exercisesData.glutes;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}