import React from "react";
import "./Committee.css";

// teachers img
import Committee_img01 from "../../assets/Committee/01.jpg";
import Committee_img02 from "../../assets/Committee/02.png";
import Committee_img03 from "../../assets/Committee/03.png";
import Committee_img04 from "../../assets/Committee/04.png";
import Committee_img05 from "../../assets/Committee/05.png";
import Committee_img06 from "../../assets/Committee/06.png";
import Committee_img07 from "../../assets/Committee/07.jpg";

const teachers_Worker_data = [
  {
    img: Committee_img01,
    name: "শাহ্ মাজমুল হক মাসুম (চাঁনময়না)",
    title: "সভাপতি",
    // mob: "01700-000000",
  },
  {
    img: Committee_img02,
    name: "মোঃ সাগর  হোসেন ",
    title: "অভিভাবক সদস্য",
    // mob: "01700-000000",
  },
  {
    img: Committee_img03,
    name: "মোঃ শহিদুল রহমান",
    title: "অভিভাবক সদস্য",
    // mob: "01700-000000",
  },
  {
    img: Committee_img04,
    name: "মীর মুহম্মদ মুহসীন",
    title: "অভিভাবক সদস্য",
    // mob: "01700-000000",
  },
  {
    img: Committee_img05,
    name: "খন্দকার গাফফার",
    title: "অভিভাবক সদস্য",
    // mob: "01700-000000",
  },
  {
    img: Committee_img06,
    name: "আজমা আক্তার",
    title: "অভিভাবক সদস্য",
    // mob: "01700-000000",
  },
  {
    img: Committee_img07,
    name: "পরিমল কুমার রাহা",
    title: "সদস্য সচিব",
    // mob: "01700-000000",
  },
];
function Committee() {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          {teachers_Worker_data.map((person, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3">
              <div className="teachers_card card text-center mb-3">
                <img
                  className="card-img-top"
                  src={person.img}
                  alt={`person ${index + 1}`}
                />
                <div className="card-body">
                  <div className="teacher_name fs-5">{person.name}</div>
                  <div className="teacher-education">{person.edu}</div>
                  <div className="teacher-title">{person.title}</div>
                  <div className="teacher-sub">{person.sub}</div>
                  {/* <div className="teacher-mobile">{person.mob}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Committee;
