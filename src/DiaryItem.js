import React from "react";
import "./DiaryItem.css";

const DiaryItem = ({
  author,
  created_date,
  emotion,
  content,
  id,
  onDelete,
}) => {
  return (
    <>
      <ul className="diary-item-container">
        <li>작성자: {author}</li>
        <li>작성일시: {new Date(created_date).toLocaleString()}</li>
        <li>감정: {emotion}</li>
        <li>작성내용: {content}</li>
      </ul>
      <button className="button--delete" onClick={() => onDelete(id)}>
        삭제하기
      </button>
    </>
  );
};

export default DiaryItem;
