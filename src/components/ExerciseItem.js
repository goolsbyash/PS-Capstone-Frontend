export default function ExerciseItem({exercise}) {
    const {name, description, uuid} = exercise;

    const handleAddPlan = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <h4>{name}</h4>
        {description}
        <button type="submit">Add to plan</button>
        </>
    )
}