import styled from "styled-components";

const Header = ({ leftButton, rightButton, pageTitle }) => {
  return (
    <HeaderContainer>
      <LeftButton>{leftButton}</LeftButton>
      <Title>{pageTitle}</Title>
      <RightButton>{rightButton}</RightButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/** 페이지 제목 */
const Title = styled.h2``;

/** header의 왼쪽에 위치하는 버튼 */
const LeftButton = styled.div`
  justify-content: flex-start;
`;

/** header의 오른쪽에 위치하는 버튼 */
const RightButton = styled.div``;
