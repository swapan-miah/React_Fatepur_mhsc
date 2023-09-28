import React from "react";
import "./Header.css";
import School_Logo from "../../../assets/school-logo.png";
import Govt_Logo from "../../../assets/govt_logo.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../../Home/Home";

function Header() {
  return (
    <>
      <div className="container">
        <div className="row bg-custom rounded-bottom-4">
          <div className="col-03 col-md-2 col-lg-2 logu-left">
            <div className="my-auto">
              <div className="logu-left-content">
                <a href="">
                  <img src={School_Logo} alt="img" className="logu my-auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <div className="mainheader-content mt-4">
              <h1 className="bg-custom">
                FATEPUR MOYNAL HAQUE SCHOOL & COLLEGE
              </h1>
              <p className="">CHAMARI FATEPUR, MIRZAPUR, TANGAIL.</p>
              <p className="">EIIN: 114488</p>
              <p className="">Eshtablished: 1969</p>
            </div>
          </div>
          <div className="col-03 col-md-2 col-lg-2 logu-right d-none d-md-block">
            <div className="logu-right-content">
              <a href="">
                <img src={Govt_Logo} alt="img" className="logu me-4 mt-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
