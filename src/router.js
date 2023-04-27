import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Journal from "./pages/Journal";

const AppRouter = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/edit" element={<Edit />} />
    <Route path="/new" element={<New />} />
    <Route path="/journal" element={<Journal />} />
  </Routes>;
};

export default AppRouter;
