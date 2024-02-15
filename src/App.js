// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { UserContext } from "./context/UserContext";
import { NewPlanContext } from "./context/NewPlanContext";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import BuildPlan from "./pages/BuildPlan";

function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [newPlan, setNewPlan] = useState([]);

  useEffect(() => {
    // fetch data from API
    const fetchData = async () => {
      const res = await fetch("https://wger.de/api/v2/exercise/?%3Flimit=30&language=2&limit=10&offset=100");
      const data = await res.json();
      console.log(data.results);
      setExercises(data.results);
    };
    fetchData();
  }, []);

  // use useEffect to check if user is logged in
  useEffect(() => {
    const activeUser = localStorage.getItem("user");
    console.log(activeUser);
    if (activeUser) {
      const foundUser = JSON.parse(activeUser);
      console.log(foundUser);
      setUser({ firstName: foundUser.firstName, _id: foundUser._id });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NewPlanContext.Provider value={{ newPlan, setNewPlan }}>
        <h1>BodyMorph</h1>
        {user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route
                path={`/${user._id}/buildplan`}
                element={<BuildPlan exercises={exercises} />}
              />
              <Route
                path={`/${user._id}/settings`}
                element={<Settings/>}
              />
            </Routes>
          </>
        ) : (
          <MainPage />
        )}
      </NewPlanContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
