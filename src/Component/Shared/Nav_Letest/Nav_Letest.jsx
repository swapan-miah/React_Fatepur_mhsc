import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav_Letest.css";

import { FaFacebook } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

function Nav_Letest() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  container rounded-4 nav_bg_color">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <FaHouseChimney className=" text-white  me-2 "></FaHouseChimney>
            হোম
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/school-intro">
                  স্কুল পরিচিতি
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teachers-worker">
                  শিক্ষক-কর্মচারীর তথ্য
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/student-info">
                  শিক্ষার্থীর তথ্য
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/syllabus">
                  সিলেবাস
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/routine">
                  রুটিন
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notice">
                  নোটিশ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/result">
                  রেজাল্ট
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Committee">
                  কমিটি
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ssc-board-result">
                  বিগত এস এস সি বোর্ড পরীক্ষার ফল
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/scholarship">
                  বৃত্তি , উপ-বৃত্তি
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/meritorious-student">
                  কৃতি শিক্ষার্থী
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/approval">
                  অনুমোদন ও স্বীকৃতি
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mpo">
                  এমপিও ও জাতীয়করনের তথ্য
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  গ্যালারি
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/img-gallary" className="dropdown-item">
                      ইমেজ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/video-gallary" className="dropdown-item">
                      ভিডিও{" "}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  সুবর্ণজয়ন্তী কর্ণার
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/subarna-jayanthi-speak"
                      className="dropdown-item"
                    >
                      বার্তা{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subarna-jayanthi-img"
                      className="dropdown-item"
                    >
                      ছবি
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subarna-jayanthi-video"
                      className="dropdown-item"
                    >
                      ভিডিও
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  অন্যান্য তথ্য
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/contribution" className="dropdown-item">
                      অবদান
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/magazine" className="dropdown-item">
                      ম্যাগাজিন
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blood-donation" className="dropdown-item">
                      রক্ত দান
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav_Letest;
