import { useState } from "react";
import "./DiaryEditor.css";

const DiaryEditor = () => {
  const [formState, setFormState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  /** 작성자 input change 이벤트 핸들러 */
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  /** form submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="diary-editor">
      <h2>오늘의 일기</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="">작성자</label>
        <input
          name="author"
          type="text"
          className="input-author"
          placeholder="작성자를 입력하세요"
          value={formState.author}
          onChange={handleFormChange}
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          className="input-content"
          value={formState.content}
          onChange={handleFormChange}
        />
        <div className="emotion-grade-wrapper">
          <label htmlFor="emotion-grade">오늘의 감정점수</label>
          <select
            name="emotion"
            id="emotion-grade"
            onChange={handleFormChange}
            value={formState.option}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="button-submit">
          일기 저장하기
        </button>
      </form>
    </div>
  );
};

export default DiaryEditor;
