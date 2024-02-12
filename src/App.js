// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { UserContext } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [exercies, setExercies] = useState([]);

  useEffect(() => {
    // fetch data from API
    const fetchData = async () => {
      const res = await fetch("https://wger.de/api/v2/exercise/?language=2");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <form onSubmit={handleSubmit}> */}
      <h1>BodyMorph App</h1>
      {user ? (
        <>
          <NavBar/>
          <Routes>
            <Route path={`/dashboard/user/${user}`} element={<Dashboard />} />
            <Route path="/dashboard/plans" />
          </Routes>
        </>
      ) : (
        <MainPage />
      )}
    </UserContext.Provider>
  );
}

export default App;
