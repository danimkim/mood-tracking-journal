import styled from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const JournalItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  /** journal item 클릭시 해당 item 조회 페이지로 이동시켜주는 함수 */
  const goDetail = () => {
    navigate(`/journal/${id}`);
  };

  return (
    <Container>
      <Link to={`/journal/${id}`}>
        <EmojiBox>Emoji</EmojiBox>
        <ContentPreview>
          <p>2023.05.02</p>
          <p>제목이에요</p>
        </ContentPreview>
      </Link>
      <ButtonBox>
        <Button>수정하기</Button>
      </ButtonBox>
    </Container>
  );
};

export default JournalItem;

const Container = styled.article`
  display: flex;
  gap: 10px;
  padding: 1rem 0.5rem;

  & + article {
    border-top: solid 1px #efecec;
  }

  a {
    display: flex;
    flex: 2;
  }
`;

const EmojiBox = styled.div`
  width: 80px;
`;

const ContentPreview = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const ButtonBox = styled.div``;
