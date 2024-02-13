import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function NavBar({ user }) {
  const { firstName, _id } = user;
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;
  const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    localStorage.clear();
  };

  return (
    <nav>
      <ul>
        <li>Welcome {firstName},</li>
        <li>
          <Link to="/">
            <button>Dashboard</button>
          </Link>
        </li>
        <li>
          <Link to={`/${_id}/buildplan`}>
            <button>Build Custom Plan</button>
          </Link>
        </li>
        <li>
          <Link to={`/${_id}/settings`}>
            <button>Settings</button>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <button type="submit" onClick={handleLogout}>
              Log Out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
