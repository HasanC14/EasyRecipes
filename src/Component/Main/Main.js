import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <p className="text-3xl text-center mt-16">EASY RECIPES</p>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
