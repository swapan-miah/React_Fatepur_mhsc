import React from "react";
import "./Nav.css";
// icon
import { FaFacebook } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

function Nav() {
  function myFunction() {
    console.log("click myFunction");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div className="container rounded-4">
        <div className="navpadding rounded-4 ">
          <div className="topnav rounded-4" id="myTopnav">
            <a href="./index.html" className="active_home">
              <FaHouseChimney className=" text-white  me-2 "></FaHouseChimney>
              হোম
            </a>
            <a href="./schoolIntro.html"> স্কুল পরিচিতি </a>
            <a href="./teachers.html">শিক্ষক-কর্মচারীর তথ্য </a>
            <a href="./studentInformation.html">শিক্ষার্থীর তথ্য </a>
            <a href="./syllabuses.html">সিলেবাস</a>
            <a href="./routine.html">রুটিন</a>
            <a href="./notice.html"> নোটিশ </a>
            <a href="./result.html">রেজাল্ট </a>
            <a href="./Commity.html">কমিটি</a>
            <a href="./ssc_result.html">বিগত এস এস সি বোর্ড পরীক্ষার ফল </a>
            <a href="./bitti.html">বৃত্তি , উপ-বৃত্তি </a>
            <a href="./best_student.html">কৃতি শিক্ষার্থী </a>
            <a href="./Approval.html"> অনুমোদন ও স্বীকৃতি</a>
            <div className="dropdown1">
              <button className="dropbtn">
                গ্যালারি
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <a href="./galary_img.html">ইমেজ </a>
                <a href="./video_galary.html">ভিডিও </a>
              </div>
            </div>
            <div className="dropdown1">
              <button className="dropbtn">
                সুবর্ণজয়ন্তী কর্ণার
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <a href="./Suborno_Speak.html">বার্তা </a>
                <a href="./Suborn_img.html">ছবি গ্যালারি</a>
                <a href="./Suborno_video.html">ভিডিও</a>
              </div>
            </div>

            <div className="dropdown1">
              <button className="dropbtn">
                অন্যান্য তথ্য
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <a href="./index.html">অবদান</a>
                <a href="./index.html">ম্যাগাজিন</a>
                <a href="./index.html"> রক্ত দান</a>
                <a href="">এমপিও ও জাতীয়করনের তথ্য</a>
              </div>
            </div>
            <a
              href=""
              style={{ fontSize: "15px" }}
              className="icon"
              onClick={myFunction}
            >
              &#9776;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
