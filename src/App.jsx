//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./routes/MyPage";
import "./App.css";
import profileIcon from "./assets/icons/profileIcon.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<MyPage profileIcon={profileIcon} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
