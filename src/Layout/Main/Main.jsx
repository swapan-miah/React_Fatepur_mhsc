import React from "react";
import Header from "../../Component/Shared/Header/Header";
import Nav from "../../Component/Shared/Nav/Nav";
import Footer from "../../Component/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
// import Nav_Letest from "../../Component/Shared/Nav_Letest/Nav_Letest";

function Main() {
  return (
    <>
      <Header></Header>
      {/* <Nav_Letest></Nav_Letest> */}
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Main;
