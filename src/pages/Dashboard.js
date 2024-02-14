import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const [viewPlan, setViewPlan] = useState(null);
  const [activePlan, setActivePlan] = useState(null);

  //* GET request to db to fetch all plans by owner id */

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(
          `https://bodymorph-backend.onrender.com/api/exercises/owner/${user._id}`
        );
        // const data = await res.json();
        console.log(res);
        setViewPlan(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlans();
  }, [user._id]);

  // GET request to fetch active plan(s)
  useEffect(() => {
    const fetchActivePlans = async () => {
      try {
        const res = await axios.get(
          `https://bodymorph-backend.onrender.com/api/exercises/active/${user._id}`
        );
        console.log(res.data);
        setActivePlan(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivePlans();
  }, [user._id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    // if (window.confirm(`Delete Plan: ${viewPlan.name}`)) {
    //   const res = await axios.delete(
    //     `https://bodymorph-backend.onrender.com/api/exercises/${viewPlan._id}/delete`
    //   )
    //   if (res) {
    //     setViewPlan(null);
    //   }
    // }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Active Plan</h4>
      {/* if no active plan, show button to link to /buildplan */}
      {activePlan ? (
        activePlan.map((plan) => (
          <ul>
            <li>
              <h5>{plan.name}</h5>
            </li>
          </ul>
        ))
      ) : (
        <Link to={`/${user._id}/buildplan`}>
          <button>No Active Plan? Build One</button>
        </Link>
      )}
      <h4>Saved Plans</h4>
      {/* if no saved plan, show button to link to /buildplan */}
      {viewPlan ? (
        <>
          {viewPlan.map((plan) => (
            <ul>
              <li>
                <h5>{plan.name}</h5>
                <button type="submit" onClick={handleDelete}>Delete Plan</button>
              </li>
            </ul>
          ))}
          <Link to={`/${user._id}/buildplan`}>
            {viewPlan.length < 4 && <button>Add New Plan</button>}
          </Link>
        </>
      ) : (
        <Link to={`/${user._id}/buildplan`}>
          <button>No Saved Plan? Build One</button>
        </Link>
      )}
      {/* if number of saved plans is less than 4, include add more buttton */}
    </div>
  );
}
