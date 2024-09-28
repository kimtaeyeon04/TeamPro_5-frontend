import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LoginPage from "./pages/LoginPage";
import LayOut from "./components/commmon/LayOut";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import TemplatePage from "./pages/TemplatePage";
import ProfileEditPage from "./pages/ProfileEditPage";

function App() {
  return (
    <Routes>
      <Route>
        {/* 기본 로그인 페이지 */}
        <Route path="/LoginPage" element={<LoginPage />} />

        <Route element={<LayOut />}>
          {/* 메인 화면  */}
          <Route path="/" element={<MainPage />} />
          {/*마이 페이지  */}
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

          <Route path="/TemplatePage" element={<TemplatePage />} />
          <Route path="/ProfileEditPage" element={<ProfileEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
