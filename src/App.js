import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  /** 일기 생성 이벤트 핸들러 */
  const handleCreateDiary = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;

    setData([...data, newItem]);
  };

  // 일기 삭제하기 핸들러 추가 handleDelete targetId 인자로 받기
  const handleDeleteDiary = (targetId) => {
    const newData = data.filter((item) => item.id !== targetId);

    setData(newData);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={handleCreateDiary} />
      <DiaryList diaryList={data} onDelete={handleDeleteDiary} />
    </div>
  );
}

export default App;
