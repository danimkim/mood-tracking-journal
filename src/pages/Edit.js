import Button from "../components/Button";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Header leftButton={<Button>뒤로가기</Button>} pageTitle={"수정하기"} />
      일기 수정 페이지 입니다.
    </div>
  );
};

export default Edit;
