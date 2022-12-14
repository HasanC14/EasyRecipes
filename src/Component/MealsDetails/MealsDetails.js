import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MealsDetails.css";
const MealsDetails = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions, strArea } = meal;
  const navigate = useNavigate();
  const Handaleanavigate = () => {
    navigate(`/meals/${idMeal}`);
  };
  return (
    <div className="rounded-lg card p-10">
      <img src={strMealThumb} alt="Dish_Image" className="rounded-lg mb-5" />
      <p className="text-4xl font-bold">{strMeal}</p>
      <p className="text-2xl">{strArea}</p>
      <p className="lg:text-2xl md:text-lg ins mb-4 ">{strInstructions}</p>
      <button className="btn p-3 rounded-md" onClick={Handaleanavigate}>
        See Full Details
        {/* <Link to={`/meals/${idMeal}`}>See Full Details</Link> */}
      </button>
    </div>
  );
};

export default MealsDetails;
