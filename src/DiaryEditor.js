import { useRef, useState } from "react";
import "./DiaryEditor.css";

const DiaryEditor = () => {
  const [formState, setFormState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const authorRef = useRef();
  const contentRef = useRef();

  /** 작성자 input change 이벤트 핸들러 */
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  /** form submit handler */
  const handleSubmit = (e) => {
    // submit 했을때, 입력값이 특정 값보다 작은 경우, 해당 input에 포커스 주기
    if (formState.author.length < 2) {
      alert("작성자명을 두 글자 이상 입력하세요.");
      authorRef.current.focus();
      return;
    }
    if (formState.content.length < 10) {
      alert("내용을 10글자 이상 입력하세요.");
      contentRef.current.focus();
      return;
    }
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
          ref={authorRef}
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          className="input-content"
          value={formState.content}
          onChange={handleFormChange}
          ref={contentRef}
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
