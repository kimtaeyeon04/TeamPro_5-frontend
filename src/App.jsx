import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LayOut from "./components/commmon/LayOut";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import TemplatePage from "./pages/TemplatePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import HackathonPage from "./pages/HackathonPage";

// 프로그램 시작시 정보 저장 초기화
import { useEffect } from "react";
import { initializeData } from "./components/domain/startProgram";

function App() {
  useEffect(() => {
    initializeData();
  }, []);

  return (
    <Routes>
      <Route>
        {/* 기본 로그인 페이지 */}
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* 회원가입 페이지 */}
        <Route path="/LoginPage/SignUpPage" element={<SignUpPage />} />
        <Route element={<LayOut />}>
          {/* 메인 화면  */}
          <Route path="/" element={<MainPage />} />
          {/* 해커톤 화면  */}
          <Route path="/HackathonPage" element={<HackathonPage />} />
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
          {/* 템플릿 열람 화면*/}
          <Route path="/TemplatePage" element={<TemplatePage />} />
          {/*프로필 편집 화면*/}
          <Route path="/ProfileEditPage" element={<ProfileEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;