//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./routes/MyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
