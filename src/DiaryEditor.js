import { useRef, useState } from "react";
import "./DiaryEditor.css";

const DiaryEditor = ({ onCreate }) => {
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
    e.preventDefault();

    // submit 했을때, 입력값이 특정 값보다 작은 경우, 해당 input에 포커스 주기
    if (formState.author.length < 2) {
      alert("작성자명을 두 글자 이상 입력하세요.");
      authorRef.current.focus();
    }
    if (formState.content.length < 10) {
      alert("내용을 10글자 이상 입력하세요.");
      contentRef.current.focus();
    }

    // onCreate 함수로 데이터 set 해주기
    onCreate(formState.author, formState.content, formState.emotion);
    setFormState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="container">
      <h2 className="form--title">오늘의 일기</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor="author" className="item__label">
            작성자
          </label>
          <input
            id="author"
            name="author"
            type="text"
            className="input item__input--author"
            placeholder="작성자를 입력하세요"
            value={formState.author}
            onChange={handleFormChange}
            ref={authorRef}
          />
        </div>
        <div className="form__item content">
          <label htmlFor="content" className="item__label">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="내용을 입력하세요"
            className="input item__input--content"
            value={formState.content}
            onChange={handleFormChange}
            ref={contentRef}
          />
        </div>
        <div className="form__item--emotion">
          <label htmlFor="emotion-grade" className="item__label emotion">
            오늘의 감정점수
          </label>
          <select
            name="emotion"
            id="emotion-grade"
            onChange={handleFormChange}
            value={formState.option}
            className="item--emotion__select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="form__button--submit">
          일기 저장하기
        </button>
      </form>
    </div>
  );
};

export default DiaryEditor;
