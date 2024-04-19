import logo from "./logo.svg";
import "./App.css";
import Profile from "./Pages/Profile";
import HomePage from "./Pages/HomePage";
import List from "./Pages/list";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profilelist" element={<List />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
