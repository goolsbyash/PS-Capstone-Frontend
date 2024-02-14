import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard({ user }) {
  const { activePlan, _id } = user;
  const [viewPlan, setViewPlan] = useState(null);

  {
    /* make GET request db by owner id */
  }
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/plans/owner/${_id}`
        );
        // const data = await res.json();
        console.log(res.data);
        setViewPlan(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Active Plan</h3>
      {/* if no active plan, show button to link to /buildplan */}
      {activePlan ? (
        <h4>{activePlan}</h4>
      ) : (
        <Link to={`/${_id}/buildplan`}>
          <button>No Active Plan? Build One</button>
        </Link>
      )}
      <h3>Saved Plans</h3>
      {/* if no saved plan, show button to link to /buildplan */}
      {viewPlan ? (
        <Link to={`/${_id}/buildplan`}>
          {viewPlan.length < 4 && <button>Add New Plan</button>}
        </Link>
      ) : (
        <Link to={`/${_id}/buildplan`}>
          <button>No Saved Plan? Build One</button>
        </Link>
      )}
      {/* if number of saved plans is less than 4, include add more buttton */}
    </div>
  );
}
