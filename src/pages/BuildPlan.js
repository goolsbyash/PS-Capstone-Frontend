import ExerciseList from "../components/ExerciseList";
import PlanSidebar from "../components/PlanSidebar";

export default function BuildPlan({ exercises }) {
  return (
    <div id="planView">
      <h2>Build Custom Workout Plan</h2>
      <ExerciseList exercises={exercises} />
      {/* // section to show added exercises */}
      <PlanSidebar />
    </div>
  );
}
