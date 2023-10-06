import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
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
import Others from "../../Layout/Others/Others";
import Img_Gallary from "../Img_Gallary/Img_Gallary";
import Video_Gallery from "../Video_Gallery/Video_Gallery";
import Subarna_Jayanthi_Img from "../Subarna_Jayanthi_Img/Subarna_Jayanthi_Img";
import Subarna_Jayanthi_Video from "../Subarna_Jayanthi_Video/Subarna_Jayanthi_Video";
import Subarna_Jayanthi_Speak from "../Subarna_Jayanthi_Speak/Subarna_Jayanthi_Speak";
import Nothing from "../Nothing/Nothing";

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
        path: "/img-gallary",
        element: <Img_Gallary></Img_Gallary>,
      },
      {
        path: "/video-gallary",
        element: <Video_Gallery></Video_Gallery>,
      },
      {
        path: "/subarna-jayanthi-img",
        element: <Subarna_Jayanthi_Img></Subarna_Jayanthi_Img>,
      },
      {
        path: "/subarna-jayanthi-video",
        element: <Subarna_Jayanthi_Video></Subarna_Jayanthi_Video>,
      },
      {
        path: "/subarna-jayanthi-speak",
        element: <Subarna_Jayanthi_Speak></Subarna_Jayanthi_Speak>,
      },
      {
        path: "*",
        element: <Nothing></Nothing>,
      },
    ],
  },
  {
    path: "/ssc-board-result",
    element: <Others></Others>,
    children: [
      {
        path: "/ssc-board-result",
        element: <SSC_Board_Result></SSC_Board_Result>,
      },
    ],
  },
]);

export default router;
