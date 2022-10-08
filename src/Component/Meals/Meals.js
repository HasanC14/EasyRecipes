import React from "react";
import { useLoaderData } from "react-router-dom";
import MealsDetails from "../MealsDetails/MealsDetails";

const Meals = () => {
  const LoadMeals = useLoaderData();
  const meals = LoadMeals.meals;

  return (
    <div>
      <p className="text-4xl text-center mt-8">
        Total {meals.length} Recipes Found
      </p>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-3 m-10">
        {meals.map((meal) => (
          <MealsDetails key={meal.idMeal} meal={meal}></MealsDetails>
        ))}
      </div>
    </div>
  );
};

export default Meals;
