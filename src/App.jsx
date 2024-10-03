import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import LayOut from "./components/commmon/LayOut";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import TemplatePage from "./pages/TemplatePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import HackathonPage from "./pages/HackathonPage";

function App() {
  return (
    <Routes>
      <Route>
        {/* 기본 로그인 페이지 */}
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* 기업회원 회원가입 페이지 */}
        <Route path="/SignUpPage" element={<SignUpPage />} />
        {/* 일반회원 회원가입 페이지 */}
        <Route path="/SignUpPage2" element={<SignUpPage2 />} />

        <Route element={<LayOut />}>
          {/* 메인 화면  */}
          <Route path="/" element={<MainPage />} />
          <Route path="/LoginPage/MainPage" element={<MainPage />} />
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
          <Route
            path="/LoginPage/MainPage/MyPage"
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
          <Route
            path="/Login/MainPage/TemplatePage"
            element={<TemplatePage />}
          />
          {/*프로필 편집 화면*/}
          <Route path="/ProfileEditPage" element={<ProfileEditPage />} />
          <Route path="/MyPage/ProfileEditPage" element={<ProfileEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
