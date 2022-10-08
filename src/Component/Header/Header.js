import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="mt-10 link text-center ">
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        HOME
      </NavLink>
      <NavLink to={"/meals"}>RECIPES</NavLink>
    </div>
  );
};

export default Header;
