import React from "react";

import "./Home.css";
import Carousel from "../Carousel/Carousel";

// img import
import chairman_img from "../../assets/Chairman.jpg";
import HeadTeacher_img from "../../assets/HeadTeacher.jpg";
import HelpLineDesktop from "../../assets/HelplineDeskt.jpg";
import HelpLineMobile from "../../assets/helpline.jpg";

//carousel img
import carosel_slider01 from "../../assets/carosel_slider/01.jpg";
import carosel_slider02 from "../../assets/carosel_slider/02.jpg";
import carosel_slider03 from "../../assets/carosel_slider/03.jpg";
import carosel_slider04 from "../../assets/carosel_slider/04.jpg";
import carosel_slider05 from "../../assets/carosel_slider/05.jpg";
import carosel_slider06 from "../../assets/carosel_slider/06.jpg";
import carosel_slider07 from "../../assets/carosel_slider/07.jpg";

const items = [
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider01}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider02}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider03}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider04}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider04}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider06}
    alt="Image 1"
  />,
  <img
    className="img-fluid rounded-4 carousl_img"
    src={carosel_slider07}
    alt="Image 1"
  />,
];

function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");
  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}

function Home() {
  return (
    <>
      {/* <!-- main section start  --> */}
      <div id="main_section" className="main_section container mt-3">
        <div className="row">
          {/* <!-- left section start --> */}
          <div className="main_left_side col-12 col-md-8 col-lg-8 col-xxl-9">
            {/* <!-- carousel section start  --> */}
            <Carousel items={items} />

            {/* <!-- carousel section end  --> */}
            {/* <!-- Head_master and Charman greetings section start  --> */}
            {/* <!-- Head_master greetings  start --> */}
            <div className="panel panel-primary mb-4">
              <div className="panel-heading-color">
                &nbsp; প্রধান শিক্ষকের শুভেচ্ছা বাণী
              </div>
              <div
                className="panel-body bg-white p-2 fs-6"
                // style={{ fontSize: "16px" }}
              >
                <p>
                  টাংগাইল জেলার অর্ন্তগর মির্জাপুর উপজেলায় অবস্থিত ঐতিহ্যবাহী
                  ফতেপুর ময়নাল হক উচ্চ বিদ্যালয়টি ১৯৬৯ খ্রিষ্টাব্দে এ গ্রামের
                  একজন কৃতি সন্তান প্রয়াত শাহ্ ফজলুল হক (নন্দ মিয়া) এ অঞ্চলের
                  মানুষের মাঝে শিক্ষার আলো জ্বেলে দেয়ার প্রয়াসে তাঁর পিতার নামে
                  এ প্রতিষ্ঠানটি তিনি প্রতিষ্ঠা করেন।তিনি ছিলেন শিক্ষানুরাগী,
                  দানবীর ও জনকল্যান হিতৈষী একজন ব্যক্তিত্ব। এ শিক্ষা
                  প্রতিষ্ঠানটি প্রথমে ফতেপুর ময়নাল হক উচ্চ বিদ্যালয় নামে
                  প্রতিষ্ঠিত হলেও ২০২৩ খ্রিষ্টাব্দে এটা ঢাকা শিক্ষা বোর্ড কর্তক
                  অনুমোদন প্রাপ্ত হয়ে বর্তমানে ফতেপুর ময়নাল হক স্কুল এন্ড কলেজে
                  রুপান্তরীত হয় এবং বিজ্ঞান, মানবিক ও ব্যবসা শিক্ষা এ তিনটি
                  শাখায় পাঠদানের অনুমতি লাভ করে।
                  <span id="dots1">...</span>
                  <span id="more1">
                    তিনি ছিলেন শিক্ষানুরাগী, দানবীর ও জনকল্যান হিতৈষী একজন
                    ব্যক্তিত্ব। এ শিক্ষা প্রতিষ্ঠানটি প্রথমে ফতেপুর ময়নাল হক
                    উচ্চ বিদ্যালয় নামে প্রতিষ্ঠিত হলেও ২০২৩ খ্রিষ্টাব্দে এটা
                    ঢাকা শিক্ষা বোর্ড কর্তক অনুমোদন প্রাপ্ত হয়ে বর্তমানে ফতেপুর
                    ময়নাল হক স্কুল এন্ড কলেজে রুপান্তরীত হয় এবং বিজ্ঞান, মানবিক
                    ও ব্যবসা শিক্ষা এ তিনটি শাখায় পাঠদানের অনুমতি লাভ করে। উক্ত
                    প্রতিষ্ঠান হতে শিক্ষা গ্রহন করে অসংখ্য মেধাবী ছাত্র/ছাত্রী
                    উচ্চ শিক্ষায় শিক্ষিত হয়ে তাঁরা ডাক্তার, প্রকৌশলী, ব্যাংকার,
                    শিক্ষক ও উচ্চ প্রদস্থ কর্মকর্তা সহ বিভিন্ন পেশায় কর্মরত
                    রয়েছেন এবং এ প্রতিষ্ঠানের সুনাম অর্জনে যথেষ্ঠ ভূমিকা
                    রেখেছেন। আমি তাঁদের উত্তরোত্তর সাফল্য কামনা করছি। আমি এ
                    প্রতিষ্ঠানের একজন প্রধান শিক্ষক (ভারপ্রাপ্ত) হিসাবে অত্যন্ত
                    গর্বিত।
                    <br />
                    পরিশেষে অত্র প্রতিষ্ঠানের প্রতিষ্ঠাতা ও তাঁর পরিবারের সকল
                    সদস্য এবং যারা এ প্রতিষ্ঠানটিকে এগিয়ে নেয়ার জন্য নিরলস শ্রম
                    দিয়েছেন তাদের প্রতি কৃতজ্ঞতা প্রকাশ করছি।
                  </span>
                </p>
                <button
                  onClick={myFunction1}
                  id="myBtn1"
                  className="btn btn-info ms-3 mb-3"
                >
                  Read more
                </button>
              </div>
              <div
                className="panel-footer p-2 text-center fs-6"
                // style={{ fontSize: "16px" }}
              >
                পরিমল কুমার রাহা
                <br />
                প্রধান শিক্ষক, ফতেপুর ময়নাল হক স্কুল এন্ড কলেজ
              </div>
            </div>
            {/* <!-- Head_master greetings  end --> */}

            {/* <!-- Charman greetings section start  --> */}
            <div className="panel panel-primary mb-4">
              <div className="panel-heading-color">
                &nbsp; সভাপতির শুভেচ্ছা বাণী
              </div>
              <div
                className="panel-body bg-white p-2 fs-6"
                // style={{ fontSize: "16px" }}
              >
                <p>
                  শিক্ষাই জাতির মেরুদন্ড। কাজেই সবার জন্য শিক্ষা অর্জন করা
                  মানুষের মৌলিক অধিকার। এ অধিকারকে যথাযথভাবে বাস্তবায়নের মাধ্যমে
                  বিশ্বের অনেক দেশ আজ উন্নত দেশ হিসেবে উন্নতির চরম শিখরে আরোহণ
                  করেছে। বর্তমানে আধুনিক ও যুগোপযোগী লেখাপড়া, খেলাধুলা,
                  সাংস্কৃতিক অনুষ্ঠান ও বিভিন্ন সামাজিক কর্মকাণ্ডে এ
                  প্রতিষ্ঠানটির রয়েছে গৌরবময় ইতিহাস। বর্তমানে অত্র
                  প্রতিষ্ঠানটি দক্ষ ম্যানেজিং কমিটির সুনিবিড় তত্ত্বাবধানে এক
                  ঝাঁক মেধাবী ও ক্ষ্যাতিমান শিক্ষক-শিক্ষিকাদের মাধ্যমে পরিচালিত
                  হচ্ছে।
                  <span id="dots2">...</span>
                  <span id="more2">
                    সম্মানিত অভিভাবক-অভিভাবিকা, এলাকার বিশিষ্ট শিক্ষানুরাগী ও
                    অত্র বিদ্যালয়ের শুভানুধ্যায়ীদের সার্বিক সহযোগিতা আমি
                    একান্ত ভাবে কামনা করছি
                  </span>
                </p>
                <button
                  onClick={myFunction2}
                  id="myBtn2"
                  className="btn btn-info ms-3 mb-3"
                >
                  Read more
                </button>
              </div>
              <div
                className="panel-footer py-2 text-center font-weight-bold fs-6"
                // style={{ fontSize: "16px" }}
              >
                #########
                <br />
                সভাপতি, ফতেপুর ময়নাল হক স্কুল এন্ড কলেজ
              </div>
            </div>

            {/* <!-- Charman greetings section end  --> */}
            {/* <!-- Head_master and Charman greetings section end  --> */}
            {/* <!-- Helpline start  --> */}
            <div id="helplineDeskPanelRow " className="d-none d-md-block">
              <div className="panel panel-primary mb-4">
                <div
                  className="panel-body bg-white p-2 fs-6"
                  // style={{ fontSize: "16px" }}
                >
                  <div className="col-12">
                    <div id="helplineDeskPanel">
                      <div className="panel-heading-color">হেল্পলাইন</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <img
                      id="helplineDesk"
                      className="img-fluid"
                      src={HelpLineDesktop}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Helpline end  --> */}
            {/* <!-- left section end --> */}
          </div>
          {/* <!-- right section start --> */}
          <div className="main_right_side col-12 col-md-4 col-lg-4 col-xxl-3">
            {/* <!-- notice_bord start  --> */}
            <div className="panel panel-primary mb-4">
              {/* <!-- Notice Board Start--> */}
              <div className="panel-heading-color">&nbsp; নোটিশ বোর্ড</div>
              <div className="panel-body bg-white text-center">
                <div className="fs-6 p-1 mb-1">
                  <a className="notice_link" href="#">
                    ** ধন্যবাদ **
                  </a>
                </div>
                <div className="fs-6 p-1">
                  <a className="notice_link" href="#">
                    ** ফতেপুর ময়নাল হক স্কুল এন্ড কলেজ এর অফিশিয়াল ওয়েব সাইটের
                    আপডেটের কাজ চলছে **
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- notice_bord end  --> */}
            {/* <!-- chairmanIntro start  --> */}
            <div className="panel panel-primary mb-4">
              <div className="panel-heading-color">&nbsp; সভাপতি</div>
              <div className="panel-body bg-white">
                <img
                  src={chairman_img}
                  alt="Image"
                  className="teacher-image chairman_Home_img"
                />
              </div>
              <div
                className="panel-footer text-center p-2 bg-white fs-6"
                // style={{ fontSize: "16px" }}
              >
                #########
              </div>
            </div>
            {/* <!-- chairmanIntro end  --> */}
            {/* <!-- HeadTeacherIntro start  --> */}
            <div className="panel panel-primary mb-4">
              <div className="panel-heading-color">&nbsp; প্রধান শিক্ষক</div>
              <div className="panel-body bg-white">
                <img
                  src={HeadTeacher_img}
                  alt="Image"
                  className="teacher-image headTeacher_Home_img"
                />
              </div>
              <div
                className="panel-footer text-center p-2 bg-white fs-6"
                // style={{ fontSize: "16px" }}
              >
                পরিমল কুমার রাহা
              </div>
            </div>
            {/* <!-- HeadTeacherIntro end  --> */}
            <div className="panel panel-primary mb-4">
              <div className="panel-heading-color">
                &nbsp; প্রয়োজনীয় ওয়েবসাইট লিংক
              </div>
              <div className="panel-body bg-white p-2">
                <div>
                  <a
                    className="notice_link"
                    href="http://www.educationboardresults.gov.bd/"
                    target="_blank"
                  >
                    &clubs; বোর্ড পরীক্ষার ফলাফল
                  </a>
                </div>

                <div>
                  <a
                    className="notice_link"
                    href="https://moedu.gov.bd/"
                    target="_blank"
                  >
                    &clubs; শিক্ষা মন্ত্রণালয়
                  </a>
                </div>
                <div>
                  <a
                    className="notice_link"
                    href="http://www.dshe.gov.bd/"
                    target="_blank"
                  >
                    &clubs; মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
                  </a>
                </div>
                <div>
                  <a
                    className="notice_link"
                    href="http://www.nctb.gov.bd/"
                    target="_blank"
                  >
                    &clubs; জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড
                  </a>
                </div>
                {/* <!-- <div>
                <a
                  className="notice_link"
                  href="http://www.teachers.gov.bd/"
                  target="_blank"
                >
                  &clubs; শিক্ষক বাতায়ন
                </a>
              </div> --> */}
                <div>
                  <a
                    className="notice_link"
                    href="http://emis.gov.bd/emis"
                    target="_blank"
                  >
                    &clubs; EDUCATION MAN. INFO. SYSTEM (EMIS)
                  </a>
                </div>
                <div>
                  <a
                    className="notice_link"
                    href="http://shed.gov.bd/"
                    target="_blank"
                  >
                    &clubs; মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ
                  </a>
                </div>
              </div>
            </div>
            <div
              id="helplineMobilePanel"
              className="panel panel-primary mb-4 d-block d-md-none"
            >
              <div className="panel-heading-color">&nbsp; হেল্পলাইন</div>
              <div className="panel-body">
                <img
                  id="helplineMobile"
                  className="w-100"
                  src={HelpLineMobile}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          {/* <!-- right section end --> */}
        </div>
      </div>
    </>
  );
}

export default Home;
