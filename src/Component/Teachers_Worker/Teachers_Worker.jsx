import React from "react";
import "./Teachers.css";

// teachers img
import Teachers_img01 from "../../assets/teachers_worker/01.jpg";
import Teachers_img02 from "../../assets/teachers_worker/02.jpg";
import Teachers_img03 from "../../assets/teachers_worker/03.jpg";
import Teachers_img04 from "../../assets/teachers_worker/04.jpg";
import Teachers_img05 from "../../assets/teachers_worker/05.jpg";
import Teachers_img06 from "../../assets/teachers_worker/06.jpg";
import Teachers_img07 from "../../assets/teachers_worker/07.jpg";
import Teachers_img08 from "../../assets/teachers_worker/08.jpg";
import Teachers_img09 from "../../assets/teachers_worker/09.jpg";
import Teachers_img10 from "../../assets/teachers_worker/10.jpg";
import Teachers_img11 from "../../assets/teachers_worker/11.jpg";
import Teachers_img12 from "../../assets/teachers_worker/12.jpg";
import Teachers_img13 from "../../assets/teachers_worker/13.jpg";
// import Teachers_img14 from "../../assets/teachers_worker/14.jpg";
import Teachers_img15 from "../../assets/teachers_worker/15.jpg";
import Teachers_img16 from "../../assets/teachers_worker/16.jpg";
import Teachers_img17 from "../../assets/teachers_worker/17.jpg";
import Teachers_img18 from "../../assets/teachers_worker/18.jpg";
import Teachers_img19 from "../../assets/teachers_worker/19.jpg";

const teachers_Worker_data = [
  {
    img: Teachers_img01,
    name: "পরিমল কুমার রাহা",
    edu: "বি.এ বি.এড",
    title: "প্রধান শিক্ষক",
    sub: "ইংরেজি",
    mob: "01301-387233",
  },
  {
    img: Teachers_img02,
    name: "মোঃ আরিফ হোসেন",
    edu: "বি.এস,সি বি.এড",
    title: "সিনিয়র শিক্ষক",
    sub: "কৃষি",
    mob: "01641-364404",
  },
  {
    img: Teachers_img03,
    name: "এস,এম আব্দুল মান্নান",
    edu: "বি.এ বি.এড",
    title: "সিনিয়র শিক্ষক",
    sub: "সামাজিক বিজ্ঞান",
    mob: "01728-221037",
  },
  {
    img: Teachers_img04,
    name: "মোঃ আলম মিয়া",
    edu: "বি.এ বি.এড",
    title: "সিনিয়র শিক্ষক",
    sub: "বাংলা",
    mob: "01736-299197",
  },
  {
    img: Teachers_img05,
    name: "মোঃ আলাউদ্দিন মিয়া",
    edu: "এফ,এম এস,টি,সি",
    title: "সিনিয়র শিক্ষক",
    sub: "ইসলাম ধর্ম",
    mob: "01717-629286",
  },
  {
    img: Teachers_img06,
    name: "রাজিয়া সুলতানা",
    edu: "বি.এ বি.এড",
    title: "সিনিয়র শিক্ষক",
    sub: "সামাজিক বিজ্ঞান",
    mob: "01725-176563",
  },
  {
    img: Teachers_img07,
    name: "একতে-খারুজ্জামান",
    edu: "বি.এ বি.এড",
    title: "সিনিয়র শিক্ষক",
    sub: "সামাজিক বিজ্ঞান",
    mob: "01719-806633",
  },
  {
    img: Teachers_img08,
    name: "বাদল কুমার সরকার",
    edu: "এম,এস,এস বি,এড",
    title: "সহকারী শিক্ষক",
    sub: "হিন্দু ধর্মীয়",
    mob: "01738-082519",
  },
  {
    img: Teachers_img09,
    name: "রেহেনা আক্তার",
    edu: "এম,এসসি",
    title: "সহকারী শিক্ষক",
    sub: "ভৌত বিজ্ঞান",
    mob: "01623-009956",
  },
  {
    img: Teachers_img10,
    name: "মোঃ মতিউর রহমান",
    edu: "বি,এ বিপিএড",
    title: "সহকারী শিক্ষক",
    sub: "শরীর চর্চা",
    mob: "01712-313845",
  },
  {
    img: Teachers_img11,
    name: "নজরুল ইসলাম",
    edu: "এমবিএ",
    title: "সহকারী শিক্ষক",
    sub: "ব্যবসায় শিক্ষা",
    mob: "01723-113807",
  },
  {
    img: Teachers_img12,
    name: "রুবেল খান",
    edu: "",
    title: "",
    sub: "গ্রন্থাগার ও তথ্য বিজ্ঞান",
    mob: "01767-763088",
  },
  {
    img: Teachers_img13,
    name: "মোহাম্মদ নজরুল ইসলাম",
    edu: "এম,এস,এস",
    title: "অফিস সহকারী",
    sub: "",
    mob: "01715-811627",
  },
  {
    img: Teachers_img15,
    name: "রাবেয়া বেগম",
    edu: "অষ্টম শ্রেণি",
    title: "আয়া",
    sub: "",
    mob: "01727-208287",
  },
  {
    img: Teachers_img16,
    name: "রিংকি আক্তার",
    edu: "অষ্টম শ্রেণি",
    title: "পরিচ্ছন্নতা কর্মী",
    sub: "",
    mob: "01641-838544",
  },
  {
    img: Teachers_img17,
    name: "আতিকুর রহমান",
    edu: "অষ্টম শ্রেণি",
    title: "নিরাপত্তা প্রহরী",
    sub: "",
    mob: "01732-358910",
  },
  {
    img: Teachers_img18,
    name: "অসীম কুমার বিশ্বাস",
    edu: "অষ্টম শ্রেণি",
    title: "অফিস সহায়ক",
    sub: "",
    mob: "01690-283267",
  },
  {
    img: Teachers_img19,
    name: "সোহেল মিয়া",
    edu: "অষ্টম শ্রেণি",
    title: "নৈশ প্রহরী",
    sub: "",
    mob: "01637-689005",
  },
];
function Teachers_Worker() {
  return (
    <>
      <div className="container mt-3">
        <div ClassName="row justify-content-center">
          {teachers_Worker_data.map((person, index) => (
            <div key={index} ClassName="col-12 col-md-4 col-lg-3">
              <div ClassName="teachers_card card text-center mb-3">
                <img
                  ClassName="card-img-top"
                  src={person.img}
                  alt={`person ${index + 1}`}
                />
                <div ClassName="card-body">
                  <div ClassName="teacher_name fs-5">{person.name}</div>
                  <div ClassName="teacher-education">{person.edu}</div>
                  <div ClassName="teacher-title">{person.title}</div>
                  <div ClassName="teacher-sub">{person.sub}</div>
                  <div ClassName="teacher-mobile">{person.mob}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teachers_Worker;
