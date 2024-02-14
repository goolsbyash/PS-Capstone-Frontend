import SidePlanList from "./SidePlanList";
// pass in UserContext

export default function PlanSidebar({ newPlan }) {
  // TODO: Read local storage to view added exercises
  const handleSavePlan = (e) => {
    e.preventDefault();
    // add exercise plan to db with user's _id
    const addPlan = {
      name: e.target.name,
      exercises: newPlan,
      owner: "",
      active: true,
    };
  };

  return (
    <div style={{ float: "right" }}>
      {/* render newPlan useState */}
      <h3>New Workout Plan</h3>
      <SidePlanList />
      <form onSubmit={handleSavePlan}>
        <input type="text" name="name" placeholder="Custom Plan Name:" />
        <br />
        <label>Set as Active</label>
        <input type="checkbox" name="activePlan" id="activePlan" />
        <br />
        <button type="submit">Save Plan</button>
      </form>
    </div>
  );
}
