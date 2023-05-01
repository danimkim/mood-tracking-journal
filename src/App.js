import Home from "./pages/Home";
import React, { useReducer, useRef } from "react";

// reducer 함수 만들기
//switch 문 이용해서 만들기
// newState를 배열ㄹ로 만들어서 사용햅기

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "EDIT": {
      newState = state.map((el) =>
        el.id === action.data.id ? { ...action.data } : el
      );
      break;
    }
    case "DELETE": {
      newState = state.filter((el) => el.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  return newState;
};

function App() {
  /** data
   *  @prop id - 일기장 고유번호
   *  @prop author - 작성자
   * @prop content - 일기내용
   * @prop emotion - 감정점수
   * @prop data - 작성일시
   * @prop targetId - 일기 수정,삭제시 수정,삭제하고자 하는 타겟 일기 고유번호
   */
  const [data, dispatch] = useReducer(reducer, []);

  /** 일기 고유번호 부여하기 위한 ref */
  const dataId = useRef(1);

  /** 일기 생성하는 함수 */
  const onCreate = (created_date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(created_date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current++;
  };

  /** 일기 수정하는 함수 */
  const onEdit = (targetId, edited_date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        data: new Date(edited_date).getTime(),
        content,
        emotion,
      },
    });
  };

  /** 일기 삭제하는 함수 */
  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  /** state를 전역에 제공하기 위한 컨텍스트 */
  const DiaryStateContext = React.createContext();

  /** dispatch 함수를 전역에 제공하기 위하 컨텍스트 */
  const DiaryDispatchContext = React.createContext();

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={(onCreate, onDelete, onEdit)}>
        <Home />
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
