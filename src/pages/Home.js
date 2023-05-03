import Button from "../components/Button";
import Header from "../components/Header";
import styled from "styled-components";
import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { JournalStateContext } from "../App";
import JournalList from "../components/JournalList";

/** 일기 목록 조회하는 메인 페이지 */
const Home = () => {
  const journalList = useContext(JournalStateContext);

  // 현재 날짜 표시하기 위한 state
  const [curDate, setCurDate] = useState(new Date());

  const [data, setData] = useState([]);

  /** header 컴포넌트 중앙에 현재 연월 표시하는 텍스트 */
  const headerText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    /** 해당 월의 가장 첫째날 */
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    /** 해당 월의 가장 마지막날 */
    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      0
    ).getTime();

    setData(
      journalList.filter(
        (journal) => firstDay <= journal.date && journal.date <= lastDay
      )
    );
  }, [curDate, journalList]);

  /** 이전달 표시하기 위해 월을 1씩 감소시키는 함수.  */
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  /** 다음달 표시하기 위해 월을 1씩 증가시키는 함수 */
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  return (
    <Container>
      <Header
        pageTitle={headerText}
        leftButton={<Button onClick={decreaseMonth}>이전월</Button>}
        rightButton={<Button onClick={increaseMonth}>다음월</Button>}
      />
      <main>
        <JournalList journalList={data} />
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
  padding: 0 10px;
  box-sizing: border-box;
`;
