import "./styles/reset.css";
import "./styles/global.css";
import React, { useReducer, useRef, createContext } from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./constant/router";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
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

/** state를 전역에 제공하기 위한 컨텍스트 */
export const JournalStateContext = createContext();

/** dispatch 함수를 전역에 제공하기 위하 컨텍스트 */
export const JournalDispatchContext = createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의일기 1번",
    date: 1683023042273,
  },
  {
    id: 2,
    emotion: 3,
    content: "오늘의일기 2번",
    date: 1683023087758,
  },
  {
    id: 3,
    emotion: 5,
    content: "오늘의일기 3번",
    date: 1683023097851,
  },
  {
    id: 4,
    emotion: 1,
    content: "오늘의일기 4번",
    date: 1683023117558,
  },
  {
    id: 5,
    emotion: 4,
    content: "오늘의일기 5번",
    date: 1683023127193,
  },
];

function App() {
  /** data
   *  @prop id - 일기장 고유번호
   *  @prop author - 작성자
   * @prop content - 일기내용
   * @prop emotion - 감정점수
   * @prop data - 작성일시
   * @prop targetId - 일기 수정,삭제시 수정,삭제하고자 하는 타겟 일기 고유번호
   */
  const [data, dispatch] = useReducer(reducer, dummyData);

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

  return (
    <JournalStateContext.Provider value={data}>
      <JournalDispatchContext.Provider value={(onCreate, onDelete, onEdit)}>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </JournalDispatchContext.Provider>
    </JournalStateContext.Provider>
  );
}

export default App;
