import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LoginPage from "./pages/LoginPage";
import LayOut from "./components/commmon/LayOut";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import TemplateViewing from "./pages/TemplateViewing";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/LoginPage" element={<LoginPage />} />

        <Route element={<LayOut />}>
          <Route
            path="/MyPage"
            element={
              <MyPage
                profileIcon={profileIcon}
                name={"포폴만들조"}
                nickname={"폴리오프레임"}
              />
            }
          />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/TemplateViewing" element={<TemplateViewing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
