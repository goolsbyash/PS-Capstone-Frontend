import SidePlanList from "./SidePlanList";
import { useContext, useRef, useState } from "react";
import { NewPlanContext } from "../context/NewPlanContext";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function PlanSidebar() {
  const planCtx = useContext(NewPlanContext);
  const { newPlan } = planCtx;
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const customNameRef = useRef(null);
  const addPlan = {
    exercises: newPlan,
    owner: user._id,
    active: false,
  };
  const handleActivePlan = (e) => {
    if (addPlan.active) {
      addPlan.active = false;
    } else addPlan.active = true;
    console.log(addPlan);
  };
  const handleSavePlan = (e) => {
    e.preventDefault();
    // add exercise plan to db with user's _id
    addPlan.name = customNameRef.current.value;
    console.log(addPlan);
    try {
        const res = axios.post("http://localhost:4000/api/exercises", addPlan);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div style={{ float: "right" }}>
      {/* render newPlan useState */}
      <h3>New Workout Plan</h3>
      <SidePlanList />
      <form onSubmit={handleSavePlan}>
        <input
          type="text"
          name="customName"
          placeholder="Custom Plan Name:"
          ref={customNameRef}
        />
        <br />
        <label>Set as Active</label>
        <input
          type="checkbox"
          name="active"
          value="active"
          id="activePlan"
          onClick={handleActivePlan}
        />
        <br />
        <button type="submit">Save Plan</button>
      </form>
    </div>
  );
}
