import { useState } from "react";
import styled from "styled-components";
import ControlMenu from "./ContorlMenu";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import JournalItem from "./JournalItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const emotionFilterList = [
  { value: "all", name: "모두" },
  { value: "good", name: "좋은감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const JournalList = ({ journalList }) => {
  const [sortType, setSortType] = useState("latest");
  const [emotionFilter, setEmotionFilter] = useState("all");

  const navigate = useNavigate();

  /** 최신순 혹은 오래된순 정렬한 목록 */
  const sortJournalList = () => {
    /** 좋은 감정 혹은 안좋은 감정에 따라 각 감정의 점수 범위에 들어가면 true를 아니면 false를 반환하는 함수  */
    const filterByEmotion = (item) => {
      if (emotionFilter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    // 깊은 복사한 배열. sort 메서드는 배열을 직접 변형 시키기 때문에 값을 복사하여 변형한다.
    const copyList = JSON.parse(JSON.stringify(journalList));

    const filteredList =
      emotionFilter === "all"
        ? copyList
        : copyList.filter((item) => filterByEmotion(item));

    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  const handleClick = () => navigate("/new");

  return (
    <Container>
      <ControlMenuBar>
        <ControlMenu
          value={sortType}
          optionList={sortOptionList}
          onChange={setSortType}
        />
        <ControlMenu
          value={emotionFilter}
          optionList={emotionFilterList}
          onChange={setEmotionFilter}
        />
        <Button onClick={handleClick}>새 일기쓰기</Button>
      </ControlMenuBar>
      {sortJournalList().map((journal) => (
        <JournalItem key={journal.id} id={journal.id} {...journal} />
      ))}
    </Container>
  );
};

export default JournalList;

const Container = styled.div`
  border: solid 1px red;
  width: 100%;
  height: 100vh;
`;

const List = styled.div`
  border: solid 1px blue;
  width: 500px;
  height: 100px;
`;

const ControlMenuBar = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  button {
    flex-grow: 1;
  }
`;
