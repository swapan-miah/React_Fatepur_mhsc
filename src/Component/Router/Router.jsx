import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Result from "../Result/Result";
import Notice from "../Notice/Notice";
import Student_Info from "../Student_Info/Student_Info";
import Syllabus from "../Syllabus/Syllabus";
import Routine from "../Routine/Routine";
import Scholarship from "../Scholarship/Scholarship";
import Meritorious_Student from "../Meritorious_Student/Meritorious_Student";
import Approval from "../Approval/Approval";
import MPO from "../MPO/MPO";
import School_Intro from "../School_Intro/School_Intro";
import Teachers_Worker from "../Teachers_Worker/Teachers_Worker";
import Committee from "../Committee/Committee";
import SSC_Board_Result from "../SSC_Board_Result/SSC_Board_Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // All Pdf component start here
      {
        path: "/student-info",
        element: <Student_Info></Student_Info>,
      },
      {
        path: "/syllabus",
        element: <Syllabus></Syllabus>,
      },
      {
        path: "/routine",
        element: <Routine></Routine>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },
      {
        path: "/result",
        element: <Result></Result>,
      },
      {
        path: "/scholarship",
        element: <Scholarship></Scholarship>,
      },
      {
        path: "/meritorious-student",
        element: <Meritorious_Student></Meritorious_Student>,
      },
      {
        path: "/approval",
        element: <Approval></Approval>,
      },
      {
        path: "/mpo",
        element: <MPO></MPO>,
      },
      // All Pdf component end here
      {
        path: "/school-intro",
        element: <School_Intro></School_Intro>,
      },
      {
        path: "/teachers-worker",
        element: <Teachers_Worker></Teachers_Worker>,
      },
      {
        path: "/committee",
        element: <Committee></Committee>,
      },
      {
        path: "/ssc-board-result",
        element: <SSC_Board_Result></SSC_Board_Result>,
      },
    ],
  },
]);

export default router;
