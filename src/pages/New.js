import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import EmotionRatingScale from "../components/EmotionRatingScale";
import JournalEditor from "../components/JournalEditor";

const New = () => {
  const navigate = useNavigate();

  /** 뒤로가기 버튼 클릭 이벤트 핸들러 */
  const handleGoPreviousClick = () => navigate(-1);

  return (
    <Container>
      <Header
        pageTitle={"일기 쓰기"}
        leftButton={<Button onClick={handleGoPreviousClick}>이전월</Button>}
      />
      <JournalEditor />
    </Container>
  );
};

export default New;

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
  padding: 0 10px;
  box-sizing: border-box;
`;
