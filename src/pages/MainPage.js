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
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      setUser(res.data.firstName);
      // store user in local storage
      localStorage.setItem('user', res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/users/signin", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem('user', res.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Main Page</h1>
      {showSignUp ? (
        <>
          <form onSubmit={handleSignup} id="signupForm">
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
        </>
      ) : (
        <>
          <form onSubmit={handleSignin} id="signinForm">
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
