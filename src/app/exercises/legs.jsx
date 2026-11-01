import ExerciseList from '../../components/ExerciseList';
import { exercisesData } from '../../data/exercises';

export default function LegsScreen() {
  const data = exercisesData.legs;

  return (
    <ExerciseList
      title={data.title}
      exercises={data.exercises}
    />
  );
}