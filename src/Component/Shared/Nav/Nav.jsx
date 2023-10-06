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
          <div className="topnav rounded-4 p-2" id="myTopnav">
            <NavLink to="/" className="active_home">
              <FaHouseChimney className=" text-white  me-2 "></FaHouseChimney>
              হোম
            </NavLink>
            <NavLink to="/school-intro"> স্কুল পরিচিতি </NavLink>
            <NavLink to="/teachers-worker">শিক্ষক-কর্মচারীর তথ্য </NavLink>
            <NavLink to="/student-info">শিক্ষার্থীর তথ্য </NavLink>
            <NavLink to="/syllabus">সিলেবাস</NavLink>
            <NavLink to="/routine">রুটিন</NavLink>
            <NavLink to="/notice">নোটিশ</NavLink>
            <NavLink to="/result">রেজাল্ট</NavLink>
            <NavLink to="/Committee">কমিটি</NavLink>
            <NavLink to="/ssc-board-result">
              বিগত এস এস সি বোর্ড পরীক্ষার ফল
            </NavLink>
            <NavLink to="/scholarship">বৃত্তি , উপ-বৃত্তি </NavLink>
            <NavLink to="/meritorious-student">কৃতি শিক্ষার্থী </NavLink>
            <NavLink to="/approval"> অনুমোদন ও স্বীকৃতি</NavLink>
            <NavLink to="/mpo">এমপিও ও জাতীয়করনের তথ্য</NavLink>
            <div className="dropdown1">
              <button className="dropbtn">
                গ্যালারি
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <NavLink to="/img-gallary">ইমেজ </NavLink>
                <NavLink to="/video-gallary">ভিডিও </NavLink>
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
                <NavLink to="/subarna-jayanthi-speak">বার্তা </NavLink>
                <NavLink to="/subarna-jayanthi-img">ছবি গ্যালারি</NavLink>
                <NavLink to="/subarna-jayanthi-video">ভিডিও</NavLink>
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
                <NavLink to="/contribution">অবদান</NavLink>
                <NavLink to="/magazine">ম্যাগাজিন</NavLink>
                <NavLink to="/blood-donation"> রক্ত দান</NavLink>
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
