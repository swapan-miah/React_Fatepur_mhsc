import React from "react";
import Header from "../Component/Shared/Header/Header";
import Nav from "../Component/Shared/Nav/Nav";
import Footer from "../Component/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Main;
