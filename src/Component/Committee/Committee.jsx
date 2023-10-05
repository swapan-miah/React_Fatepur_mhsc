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

export default Committee;
