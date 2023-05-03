import { useParams } from "react-router-dom";

/** 일기 조회 페이지 */
const Journal = () => {
  const { id } = useParams();

  return <div>journal</div>;
};

export default Journal;
