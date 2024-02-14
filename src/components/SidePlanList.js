import { NewPlanContext } from "../context/NewPlanContext";
import { useContext } from "react";

export default function SidePlanList() {
  const planCtx = useContext(NewPlanContext);
  const { newPlan } = planCtx;

  return (
    <>
      <ol>
        {newPlan.length >= 1 &&
          newPlan.map((plan) => <li key={plan.name}>{plan.name}<br/>Reps: {plan.reps}<br/>Sets: {plan.sets}</li>)}
      </ol>
    </>
  );
}
