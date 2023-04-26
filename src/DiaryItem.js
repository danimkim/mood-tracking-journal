import React, { useState } from "react";
import "./DiaryItem.css";

const DiaryItem = ({
  author,
  created_date,
  emotion,
  content,
  id,
  onDelete,
  onEdit,
}) => {
  // 수정하기 상태 추가
  const [isEditing, setIsEditing] = useState(false);

  // 수정하기 상태를 toggle하는 함수 만들기
  const toggleEdit = () => setIsEditing((prev) => !prev);

  // localContent 상태 추가
  const [localContent, setLocalContent] = useState(content);

  const handleDelete = () => {
    if (window.confirm("해당 일기를 정말 삭제하시겠어요?")) {
      onDelete(id);
    } else {
      return;
    }
  };

  const handleEdit = () => {
    if (window.confirm("해당 일기를 수정하시겠어요?")) {
      onEdit(id, localContent);
      setLocalContent("");
      toggleEdit();
    } else {
      return;
    }
  };

  const handleContentChange = (e) => setLocalContent(e.target.value);

  return (
    <>
      <ul className="diary-item-container">
        <li>작성자: {author}</li>
        <li>작성일시: {new Date(created_date).toLocaleString()}</li>
        <li>감정: {emotion}</li>
        <li>
          작성내용:{" "}
          {isEditing ? (
            <textarea value={localContent} onChange={handleContentChange} />
          ) : (
            content
          )}
        </li>
      </ul>
      <div className="button-container">
        {isEditing ? (
          <>
            <button onClick={handleEdit}>수정완료</button>
            <button onClick={toggleEdit}>수정취소</button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit}>수정하기</button>
            <button className="button--delete" onClick={handleDelete}>
              삭제하기
            </button>
          </>
        )}
      </div>

      {/* 상태에 따라 수정 취소 / 수정 완료 버튼 및 수정하기 / 삭제하기 버튼 추가 */}
    </>
  );
};

export default DiaryItem;
