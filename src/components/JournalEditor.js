import styled from "styled-components";
import EmotionRatingScale from "./EmotionRatingScale";
import Button from "./Button";

const JournalEditor = () => {
  return (
    <Form>
      <label htmlFor="">날짜</label>
      <input type="date" />
      <label htmlFor="">오늘의 감정점수</label>
      <EmotionRatingScale />
      <input type="text" style={{ display: "none" }} />
      <label htmlFor="">오늘의 일기</label>
      <Textarea name="" id="" cols="30" rows="10" />
      <ButtonContainer>
        <Button type="button" buttonType={"warning"}>
          취소하기
        </Button>
        <Button type="submit" buttonType="positive">
          작성완료
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default JournalEditor;

const Form = styled.form`
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const Textarea = styled.textarea`
  resize: none;
`;
