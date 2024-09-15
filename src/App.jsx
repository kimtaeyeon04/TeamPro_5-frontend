//import React from "react";
import { Routes, Route } from 'react-router-dom';

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./routes/MyPage";
import "./App.css";
import profileIcon from "./assets/icons/profileIcon.png";
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
        <Route>
          <Route path={"/MyPage"} element={<MyPage profileIcon={profileIcon} />} />
          <Route path={"/MainPage"} element={<MainPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
