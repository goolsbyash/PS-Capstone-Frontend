import ExerciseItem from "./ExerciseItem";

export default function ExerciseList({exercises}) {
    return (
        <div>
            {exercises.length >= 1 && exercises.map((exercise) => <ExerciseItem exercise={exercise} key={exercise.uuid}/>)}
        </div>
    )
}