import React, { useState } from "react";
import "./Nav.css";
// icon
import { FaFacebook } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [galleryBtnActive, setGalleryBtnActive] = useState(false);
  const [subornoBtnActive, setSubornoBtnActive] = useState(false);
  const [othersBtnActive, setOthersBtnActive] = useState(false);
  function myFunction() {
    console.log("click myFunction");
    var list = document.getElementById("myTopnav").classList;
    list.toggle("responsive");
    setGalleryBtnActive(false);
    setSubornoBtnActive(false);
    setOthersBtnActive(false);
  }
  function activeGallery_myFunction() {
    myFunction();
    console.log("pls add color dropdown");
    const dropbtn_galary = document.querySelector(".dropbtn_galary");
    dropbtn_galary.classList.add("active");
    console.log(dropbtn_galary.classList.add("active"));
  }
  function activeSuboro_myFunction() {
    myFunction();
    console.log("pls add color dropdown");
    const dropbtn_su_joyonti = document.querySelector(".dropbtn_su_joyonti");
    dropbtn_su_joyonti.classList.add("active");
    console.log(dropbtn_su_joyonti.classList.add("active"));
  }
  function activeOthers_myFunction() {
    myFunction();
    console.log("pls add color dropdown");
    const dropbtn_others = document.querySelector(".dropbtn_others");
    dropbtn_others.classList.add("active");
    console.log(dropbtn_others.classList.add("active"));
  }

  return (
    <>
      <div className="container p-0 rounded-4">
        <div className="navpadding rounded-4 ">
          <div className="topnav rounded-4 p-2" id="myTopnav">
            <NavLink to="/" onClick={myFunction}>
              <FaHouseChimney className=" text-white  me-2 pb-1 pb-md-0 "></FaHouseChimney>
              হোম
            </NavLink>
            <NavLink to="/school-intro" onClick={myFunction}>
              {" "}
              স্কুল পরিচিতি
            </NavLink>
            <NavLink to="/teachers-worker" onClick={myFunction}>
              শিক্ষক-কর্মচারীর তথ্য{" "}
            </NavLink>
            <NavLink to="/student-info" onClick={myFunction}>
              শিক্ষার্থীর তথ্য{" "}
            </NavLink>
            <NavLink to="/syllabus" onClick={myFunction}>
              সিলেবাস
            </NavLink>
            <NavLink to="/routine" onClick={myFunction}>
              রুটিন
            </NavLink>
            <NavLink to="/notice" onClick={myFunction}>
              নোটিশ
            </NavLink>
            <NavLink to="/result" onClick={myFunction}>
              রেজাল্ট
            </NavLink>
            <NavLink to="/Committee" onClick={myFunction}>
              কমিটি
            </NavLink>
            <NavLink to="/ssc-board-result" onClick={myFunction}>
              বিগত এস এস সি বোর্ড পরীক্ষার ফল
            </NavLink>
            <NavLink to="/scholarship" onClick={myFunction}>
              বৃত্তি , উপ-বৃত্তি{" "}
            </NavLink>
            <NavLink to="/meritorious-student" onClick={myFunction}>
              কৃতি শিক্ষার্থী{" "}
            </NavLink>
            <NavLink to="/approval" onClick={myFunction}>
              {" "}
              অনুমোদন ও স্বীকৃতি
            </NavLink>
            <NavLink to="/mpo" onClick={myFunction}>
              এমপিও ও জাতীয়করনের তথ্য
            </NavLink>
            <div className="dropdown1">
              <button className="dropbtn dropbtn_galary">
                গ্যালারি
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <NavLink
                  to="/img-gallary"
                  className="dropbtn_galary_item"
                  onClick={activeGallery_myFunction}
                >
                  ছবি{" "}
                </NavLink>
                <NavLink
                  to="/video-gallary"
                  className="dropbtn_galary_item"
                  onClick={activeGallery_myFunction}
                >
                  ভিডিও{" "}
                </NavLink>
              </div>
            </div>
            <div className="dropdown1">
              <button className="dropbtn dropbtn_su_joyonti">
                সুবর্ণজয়ন্তী কর্ণার
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <NavLink
                  to="/subarna-jayanthi-speak"
                  className="dropbtn_su_joyonti_item"
                  onClick={activeSuboro_myFunction}
                >
                  বার্তা{" "}
                </NavLink>
                <NavLink
                  to="/subarna-jayanthi-img"
                  className="dropbtn_su_joyonti_item"
                  onClick={activeSuboro_myFunction}
                >
                  ছবি{" "}
                </NavLink>
                <NavLink
                  to="/subarna-jayanthi-video"
                  className="dropbtn_su_joyonti_item"
                  onClick={activeSuboro_myFunction}
                >
                  ভিডিও
                </NavLink>
              </div>
            </div>

            <div className="dropdown1">
              <button className="dropbtn dropbtn_others">
                অন্যান্য তথ্য
                <BsCaretDownFill
                  className="text-white"
                  style={{ marginBottom: "4px", marginLeft: "4px" }}
                ></BsCaretDownFill>
              </button>
              <div className="dropdown-content">
                <NavLink
                  to="/contribution"
                  className="dropbtn_others_item"
                  onClick={activeOthers_myFunction}
                >
                  অবদান
                </NavLink>
                <NavLink
                  to="/magazine"
                  className="dropbtn_others_item"
                  onClick={activeOthers_myFunction}
                >
                  ম্যাগাজিন
                </NavLink>
                <NavLink
                  to="/blood-donation"
                  className="dropbtn_others_item"
                  onClick={activeOthers_myFunction}
                >
                  {" "}
                  রক্ত দান
                </NavLink>
              </div>
            </div>
            <a
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
