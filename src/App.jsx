import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import profileIcon from "./assets/icons/Header/profileIcon.png";
import LoginPage from "./pages/LoginPage";
import MemberSelectionPage from "./pages/MemberSelectionPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import LayOut from "./components/commmon/LayOut";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import HackathonPage from "./pages/HackathonPage";
import CreatePortfolioPage from "./pages/CreatePortfolioPage";

function App() {
  return (
    <Routes>
      <Route>
        {/* 기본 로그인 페이지 */}
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* 회원 선택 페이지 */}
        <Route path="/MemberSelectionPage" element={<MemberSelectionPage />} />
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
          {/* 포트폴리오 제작 화면  */}
          <Route
            path="/CreatePortfolioPage"
            element={<CreatePortfolioPage />}
          />

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
            path="/MyPage"
            element={
              <MyPage
                profileIcon={profileIcon}
                name={"포폴만들조"}
                nickname={"폴리오프레임"}
              />
            }
          />
          {/* 포폴 열람 화면*/}
          <Route path="/PortfolioPage" element={<PortfolioPage />} />

          {/*프로필 편집 화면*/}
          <Route path="/ProfileEditPage" element={<ProfileEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;