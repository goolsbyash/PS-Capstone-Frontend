import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Settings() {
  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;
  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: post/patch request to backend to update setting
  };

  const handleDelete = async (e) => {
    if (
      window.confirm(
        "Are you abosolutely sure you want to delete your account?"
      )
    ) {
      try {
        const res = await axios.delete(
          `https://bodymorph-backend.onrender.com/api/users/${user._id}/delete`
        );
        const res2 = await axios.delete(
          `https://bodymorph-backend.onrender.com/api/exercises/owner/${user._id}`
        );
        if (res && res2) {
          localStorage.clear();
          setUser(null);
        }
        // else
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="firstName" placeholder="First Name:" />
        <input type="text" name="lastName" placeholder="Last Name:" />
        <input type="email" name="email" placeholder="Update email:" />
        <input
          type="password"
          name="oldPassword"
          placeholder="Current Password:"
        />
        <input
          type="password"
          name="newPassword"
          placeholder="Enter New Password:"
        />
        <input
          type="password"
          name="newPassword2"
          placeholder="Confirm New Password:"
        />
        <button type="submit" onClick={handleUpdate}>
          Update Account
        </button>
      </form>
      <br />
      <Link to="/">
        <button type="submit" onClick={handleDelete}>
          Delete Account
        </button>
      </Link>
    </div>
  );
}
