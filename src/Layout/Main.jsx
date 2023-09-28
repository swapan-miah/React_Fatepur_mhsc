import React from "react";
import Header from "../Component/Shared/Header/Header";
import Nav from "../Component/Shared/Nav/Nav";
// import Home from "../Component/Home/Home";
import Footer from "../Component/Shared/Footer/Footer";
// import Teachers from "../Component/Teachers/Teachers";
// import Result from "../Component/Result/Result";
import Notice from "../Component/Notice/Notice";

function Main() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      {/* <Home></Home> */}
      {/* <Teachers></Teachers> */}
      {/* <Result></Result> */}
      <Notice></Notice>

      <Footer></Footer>
    </>
  );
}

export default Main;
