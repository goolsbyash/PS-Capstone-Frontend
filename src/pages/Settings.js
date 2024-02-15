import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Settings() {
  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;

  const firstNameRef = useRef(null);
  const emailRef = useRef(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const update = {
      firstName: firstNameRef.current.value,
      email: emailRef.current.value,
    };
    const res = await axios.patch(
      `https://bodymorph-backend.onrender.com/api/users/${user._id}/update`,
      update
    );
    if (res) {
      setUser(res.data.firstName);
      localStorage.setItem("user", JSON.stringify(res.data));
    } else window.alert("Something went wrong. Update unsuccesful.");
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
        if (res || res2) {
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
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name:"
          ref={firstNameRef}
        />
        <input
          type="email"
          name="email"
          placeholder="Update email:"
          ref={emailRef}
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
