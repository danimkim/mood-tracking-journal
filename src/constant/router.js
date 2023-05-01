import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import New from "../pages/New";
import Journal from "../pages/Journal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  // TODO: 유효하지 않은 id 입력시 예외처리 하기
  {
    path: "/journal/:id",
    element: <Journal />,
  },
]);
