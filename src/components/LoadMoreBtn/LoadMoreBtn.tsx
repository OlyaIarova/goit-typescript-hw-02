import css from './LoadMoreBtn.module.css';
import React, { ReactElement } from 'react';

interface LoadMoreBtnProps {
  onClick: () => void;
}
//для відображення кнопки "Load more" (Завантажити більше) 
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;