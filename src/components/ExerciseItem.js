import { useContext, useRef, useState } from "react";
import { NewPlanContext } from "../context/NewPlanContext";

export default function ExerciseItem({ exercise }) {
  const { name, description, uuid } = exercise;
  const [showRepCount, setShowRepCount] = useState(false);
  // TODO: function to fetch image of exercise from db

  const repsRef = useRef(null);
  const setsRef = useRef(null);

  const planCtx = useContext(NewPlanContext);
  const { newPlan, setNewPlan } = planCtx;

  const handleAddPlan = (e) => {
    e.preventDefault();
    setShowRepCount(!showRepCount);
  };

  const handleSavePlan = (e) => {
    e.preventDefault();
    // save exercise reps/sets
    // add name to newPlan with setNewPlan
    const addNewPlan = {
      name: name,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      uuid: uuid,
    };
    // if (uuid != newPlan.uuid)
    console.log(newPlan.uuid);
    console.log(uuid);
    console.log(addNewPlan.uuid);
      setNewPlan(newPlan.concat(addNewPlan));
    // else console.log('Dupe exercise');;
    console.log(JSON.stringify(newPlan));
    localStorage.setItem("plan", JSON.stringify(newPlan));
    setShowRepCount(!showRepCount);
  };

  return (
    <>
      {showRepCount ? (
        <>
          <h4>{name}</h4>
          <form style={{ width: "100px" }} onSubmit={handleSavePlan}>
            <label htmlFor="reps">Reps: </label>
            <input type="number" name="reps" id="reps" ref={repsRef} />
            <br />
            <label htmlFor="sets">Sets: </label>
            <input type="number" name="sets" id="sets" ref={setsRef} />
            <br />
            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <>
          <h4>{name}</h4>
          {description}
          <button type="submit" onClick={handleAddPlan}>
            Add to plan
          </button>
        </>
      )}
    </>
  );
}
