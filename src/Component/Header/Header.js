import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="mt-10 link text-center ">
      <Link to={"/home"}>HOME</Link>
      <Link to={"/meals"}>RECIPES</Link>
      <Link to={"/comments"}>COMMENTS</Link>
    </div>
  );
};

export default Header;
