import axios from "axios";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MainPage() {
  const [showSignUp, setShowSignUp] = useState(false);
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Main Page</h1>
      <form onSubmit={handleSubmit} id="signinForm">
        <input
          type="text"
          name="firstName"
          placeholder="First Name:"
          ref={firstNameRef}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name:"
          ref={lastNameRef}
        />
        <input type="email" name="email" placeholder="Email:" ref={emailRef} />
        <input
          type="password"
          name="password"
          placeholder="Password:"
          ref={passwordRef}
        />
        <button type="submit">Sign Up!</button>
      </form>
    </main>
  );
}
