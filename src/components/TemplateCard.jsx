import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateCard.module.css";

// 템플릿 카드 1개
//templateName, description, templateThumnail을 props로!
const TemplateCard = ({ templateName, description, templateThumnail }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* 썸네일 이미지 props로 받아서 넣음. */}
        <img
          src={templateThumnail}
          alt="Template"
          className={styles.thumnail}
        />
      </div>
      {/* 템플릿 이름 props로 받아서 넣음. */}
      <h3 className={styles.templateName}>{templateName}</h3>
      {/* 템플릿 설명 props로 받아서 넣음. */}
      <p className={styles.description}>{description}</p>
      {/* 보기 버튼 */}
      <button className={styles.button}>보기</button>
    </div>
  );
};

// TemplateCard의 프롭타입
TemplateCard.propTypes = {
  templateName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  templateThumnail: PropTypes.string.isRequired,
};

export default TemplateCard;
