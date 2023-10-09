import React from "react";
import "./Footer.css";
import School_Logo from "../../../assets/school-logo.png";

// icon
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-content container">
        <div className="row p-3 mb-3 ">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="footer-column1 text-center">
              <h3 className="" style={{ fontWeight: "bolder" }}>
                CONTACT US
              </h3>
              <p>Fatepur Moynal Haque School & College</p>
              <p>Chamari Fatepur, Mirzapur, Tangail.</p>
              <p>EIIN: 114488</p>
              <p>
                <BsTelephone></BsTelephone> 01309-114488
              </p>
              <p>
                <BsEnvelopeAt></BsEnvelopeAt> fmhhs1944@gmail.com
              </p>
              <div className="social-content d-flex justify-content-center">
                <div className="footer-social-links">
                  <a href="" target="_blank">
                    <FaFacebook className="text-white "></FaFacebook>
                  </a>
                  <a href="">
                    <FaYoutube className="text-white"></FaYoutube>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="footer-column2 text-center">
              <img
                src={School_Logo}
                alt="Image"
                className="footor-logu d-none d-md-block"
                height="140px"
                width="140px"
              />
              <p className="text-center pt-5 pt-md-0" id="copyRight">
                Copyright @ 2023 Fatepur Moynal Haque School & College. All
                Right Reserved
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="footer-column3 text-center">
              <h3 style={{ fontWeight: "bolder" }} className="pt-5 pt-md-0">
                LINKS
              </h3>
              <p>
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="./index.html"
                >
                  &clubs; School Login
                </a>
              </p>
              <p>
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="./index.html"
                >
                  &clubs; Teacher Login
                </a>
              </p>
              <p>
                <a className="text-decoration-none" href="./notice.html">
                  &clubs; Notice
                </a>
              </p>

              <p className="pt-5 pt-md-3">
                Design, Developed and Maintained by <br />
                Jahid Computer's & Training Center
                <div className="footer-social-links pt-2">
                  <a
                    href="https://www.facebook.com/groups/513112963035467"
                    target="_blank"
                  >
                    <FaFacebook className="text-white "></FaFacebook>
                  </a>
                  <a href="https://www.facebook.com/jctcit" target="_blank">
                    <FaFacebook className="text-white "></FaFacebook>
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
