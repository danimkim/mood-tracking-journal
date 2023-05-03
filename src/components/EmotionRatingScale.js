import styled from "styled-components";

/** 일기 작성 페이지의 감정 이모지 선택 부분 */
const EmotionRatingScale = () => {
  const BASE_URL = `${process.env.PUBLIC_URL}/assets`;

  return (
    <Container>
      <Scale>
        <img src={`${BASE_URL}/emotion-1.png`} alt="" />
      </Scale>
      <Scale>
        <img src={`${BASE_URL}/emotion-2.png`} alt="" />
      </Scale>
      <Scale>
        <img src={`${BASE_URL}/emotion-3.png`} alt="" />
      </Scale>
      <Scale>
        <img src={`${BASE_URL}/emotion-4.png`} alt="" />
      </Scale>
      <Scale>
        <img src={`${BASE_URL}/emotion-5.png`} alt="" />
      </Scale>
    </Container>
  );
};

export default EmotionRatingScale;

const Container = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Scale = styled.li`
  img {
    width: 50px;
    height: 50px;
  }
`;
