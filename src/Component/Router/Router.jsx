import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Result from "../Result/Result";
import Notice from "../Notice/Notice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/result",
        element: <Result></Result>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },
    ],
  },
]);

export default router;
