import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setDate] = useState([]);

  const dataId = useRef(0);

  /** 일기 생성 이벤트 핸들러 */
  const handleCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;

    setDate([...data, newItem]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={handleCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
