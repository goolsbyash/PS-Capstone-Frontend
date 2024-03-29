import axios from "axios";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MainPage() {
  const [showSignUp, setShowSignUp] = useState(true);
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://bodymorph-backend.onrender.com/api/users/signup", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      // store user in local storage
      await localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://bodymorph-backend.onrender.com/api/users/signin", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      await localStorage.setItem("user", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main id="welcome">
      <h3>Welcome!</h3>
      {showSignUp ? (
        <div id="formWrapper">
          <form className="welcomeForm" onSubmit={handleSignup} id="signupForm">
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
            <input
              type="email"
              name="email"
              placeholder="Email:"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              placeholder="Password:"
              ref={passwordRef}
            />
            <button type="submit">Sign Up!</button>
          </form>
          <span>
            Have an account already? {"  "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
          </span>
        </div>
      ) : (
        <>
          <form className="welcomeForm" onSubmit={handleSignin} id="signinForm">
            <input
              type="email"
              name="email"
              placeholder="Email:"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              placeholder="Password:"
              ref={passwordRef}
            />
            <button type="submit">Sign In!</button>
          </form>
          <span>
            Don't have an account? {"  "}{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
          </span>
        </>
      )}
    </main>
  );
}
