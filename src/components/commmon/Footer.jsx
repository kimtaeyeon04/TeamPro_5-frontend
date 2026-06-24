import React from "react";

import Logo from "../../assets/icons/Logo.png";
import Facebook from "../../assets/icons/Footer/Facebook.png";
import Instagram from "../../assets/icons/Footer/Instagram.png";
import Twitter from "../../assets/icons/Footer/Twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#d0d1d9] w-[85%] h-[277px] box-border flex flex-col items-center justify-center py-[40px] px-[40px] mx-auto">
      <div className="text-[1.5em] font-[700] text-center text-[#fff] font-['OTF_B']">FolioFrame</div>
      <div className="flex items-center justify-center">
        {/*로고 대신해서...;;*/}
        <img src={Logo} alt="Logo" width={30} height={60} />
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="text-[#fff]">
          <div className="text-[#fff] text-[0.9em] font-[600] cursor-pointer py-[3px] px-[0] font-['OTF_R']">팀프로젝트1 5팀</div>
          <div className="text-[#fff] text-[0.9em] font-[600] cursor-pointer py-[3px] px-[0] font-['OTF_R']">팀명 : 포폴만드조</div>
          <div className="text-[#fff] text-[0.9em] font-[600] cursor-pointer py-[3px] px-[0] font-['OTF_R']">조원 : 김태연, 김예은, 조수연, 최현혜</div>
        </div>

        <div className="flex gap-[10px]">
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;