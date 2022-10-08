import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const SingleRecipe = () => {
  const LoadRecipe = useLoaderData();
  const Recipe = LoadRecipe.meals;
  console.log(Recipe);
  return (
    <div>
      {Recipe.map((details) => (
        <div className="mt-16 m-10">
          <p className="text-6xl text-center ">{details.strMeal}</p>
          <div className="flex justify-center">
            <img
              src={details.strMealThumb}
              alt=""
              className="rounded-lg mt-8 mb-8 w-96 border-solid border-4 border-blue-900 "
            />
          </div>
          <div className=" lg:ml-40 lg:mr-40 sm:m-0">
            <p className="text-3xl font-bold mt-10">How to make</p>
            <p className="md:text-2xl sm:text-xl">{details.strInstructions}</p>
          </div>

          <div className="flex justify-center mt-8">
            {/* <iframe
              width="560"
              height="315"
              src={details.strYoutube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            <a
              href={details.strYoutube}
              className="text-4xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch On YouTube
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleRecipe;
