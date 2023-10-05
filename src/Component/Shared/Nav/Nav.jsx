import React from "react";
import "./Nav.css";
// icon
import { FaFacebook } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

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
      <div className="container p-0 rounded-4">
        <div className="navpadding rounded-4 ">
          <div className="topnav rounded-4" id="myTopnav">
            <NavLink to="/" className="active_home">
              <FaHouseChimney className=" text-white  me-2 "></FaHouseChimney>
              হোম
            </NavLink>
            <NavLink to="./schoolIntro.html"> স্কুল পরিচিতি </NavLink>
            <NavLink to="./teachers.html">শিক্ষক-কর্মচারীর তথ্য </NavLink>
            <NavLink to="./studentInformation.html">শিক্ষার্থীর তথ্য </NavLink>
            <NavLink to="./syllabuses.html">সিলেবাস</NavLink>
            <NavLink to="./routine.html">রুটিন</NavLink>
            <NavLink to="/notice">নোটিশ</NavLink>
            <NavLink to="/result">রেজাল্ট</NavLink>
            <NavLink to="./Commity.html">কমিটি</NavLink>
            <NavLink to="./ssc_result.html">
              বিগত এস এস সি বোর্ড পরীক্ষার ফল{" "}
            </NavLink>
            <NavLink to="./bitti.html">বৃত্তি , উপ-বৃত্তি </NavLink>
            <NavLink to="./best_student.html">কৃতি শিক্ষার্থী </NavLink>
            <NavLink to="./Approval.html"> অনুমোদন ও স্বীকৃতি</NavLink>
            <div className="dropdown1">
              <button className="dropbtn">
                গ্যালারি
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <NavLink to="./galary_img.html">ইমেজ </NavLink>
                <NavLink to="./video_galary.html">ভিডিও </NavLink>
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
                <NavLink to="./Suborno_Speak.html">বার্তা </NavLink>
                <NavLink to="./Suborn_img.html">ছবি গ্যালারি</NavLink>
                <NavLink to="./Suborno_video.html">ভিডিও</NavLink>
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
                <NavLink to="./index.html">অবদান</NavLink>
                <NavLink to="./index.html">ম্যাগাজিন</NavLink>
                <NavLink to="./index.html"> রক্ত দান</NavLink>
                <NavLink to="">এমপিও ও জাতীয়করনের তথ্য</NavLink>
              </div>
            </div>
            <NavLink
              to=""
              style={{ fontSize: "15px" }}
              className="icon"
              onClick={myFunction}
            >
              &#9776;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
