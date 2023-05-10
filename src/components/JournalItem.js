import styled from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const JournalItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  /** converted from milliseconds to locale date value */
  const formattedDate = new Date(parseInt(date)).toLocaleDateString();

  /** journal item 클릭시 해당 item 조회 페이지로 이동시켜주는 함수 */
  const goDetail = () => {
    navigate(`/journal/${id}`);
  };

  return (
    <Container>
      <Link to={`/journal/${id}`}>
        <EmojiBox>{emotion}</EmojiBox>
        <ContentPreview>
          <p>{formattedDate}</p>
          <p>{content}</p>
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
