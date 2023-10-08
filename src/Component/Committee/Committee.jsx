import React from "react";
import "./Committee.css";

// teachers img
import Committee_img01 from "../../assets/Committee/01.jpg";

const teachers_Worker_data = [
  {
    img: Committee_img01,
    name: "#########",
    title: "সভাপতি",
    mob: "01700-000000",
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
                  <div className="teacher-mobile">{person.mob}</div>
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
