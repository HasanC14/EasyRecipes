import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Main from "./Component/Main/Main";
import Meals from "./Component/Meals/Meals";
import SingleRecipe from "./Component/SingleRecipe/SingleRecipe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        {
          path: "/meals",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s"
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: "/meals/:idMeal",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
            );
          },
          element: <SingleRecipe></SingleRecipe>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
