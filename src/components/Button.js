import styled from "styled-components";

const Button = ({ children, buttonType, onClick }) => {
  return (
    <ButtonStyle buttonType={buttonType} onClick={onClick} type="button">
      {children}
    </ButtonStyle>
  );
};

export default Button;

// default, warning, positive, disable

const ButtonStyle = styled.button`
  border: none;
  background-color: ${(props) =>
    props.buttonType === "warning"
      ? "#FF8782"
      : props.buttonType === "positive"
      ? "#99DAE9"
      : props.buttonType === "disable"
      ? "#E0D7FC"
      : "#8d8cff"};
  color: #fff;
  width: 80px;
  height: 30px;
  font-size: 0.8rem;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

Button.defaultProps = {
  buttonType: "default",
};
