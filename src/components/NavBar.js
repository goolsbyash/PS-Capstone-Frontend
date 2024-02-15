import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function NavBar() {
  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;
  const handleLogout = (e) => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <nav>
      <p><b>Welcome {user.firstName},</b></p>

      <ul>
        <li></li>{" "}
        <li>
          <Link to="/">
            <button>Dashboard</button>
          </Link>
        </li>
        <li>
          <Link to={`/${user._id}/buildplan`}>
            <button>Build Custom Plan</button>
          </Link>
        </li>
        <li>
          <Link to={`/${user._id}/settings`}>
            <button>Settings</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button type="submit" onClick={handleLogout}>
              Log Out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
