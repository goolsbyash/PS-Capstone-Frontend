import { Link } from "react-router-dom";

export default function NavBar({user}) {
  const {firstName, _id} = user;

  return (
    <nav>
      <ul>
        <li>Welcome {firstName},</li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to={`/${_id}/buildplan`}>Build Custom Plan</Link>
        </li>
        <li>
          <button><Link to={`/${_id}/settings`}>Settings</Link></button>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}
