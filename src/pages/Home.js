import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header
        leftButton={<Button>이전으로</Button>}
        rightButton={<Button>다음으로</Button>}
        pageTitle={`홈`}
      />
      <main className="main">
        <div>여기가 메인 페이지 입니다.</div>
      </main>
    </>
  );
};

export default Home;
