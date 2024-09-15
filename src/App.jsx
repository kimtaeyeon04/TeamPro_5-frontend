import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LayOut from './components/commmon/LayOut';
import MyPage from "./pages/MyPage";
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route>
      <Route element={<LayOut />}>
          <Route path="/MyPage" element={<MyPage profileIcon={profileIcon} />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
