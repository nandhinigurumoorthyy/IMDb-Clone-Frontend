import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";
import MovieContainer from "./components/MovieContainer";
import SeeMore from "./components/SeeMore";
import HomePage from "./components/HomePage";
import AddMovie from "./components/AddMovie";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<HomePage />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/search/:query" element={<MovieContainer />} />
          <Route path="/moviedetails/:id" element={<SeeMore />} />
          <Route path="/addnewmovie" element={<AddMovie />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
