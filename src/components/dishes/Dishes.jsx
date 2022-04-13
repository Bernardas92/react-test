
import React, { useState, useEffect } from "react";
import Dish from "../dish/Dish";

const Dishes = (props) => {
  const [meals, setMeals] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.id}`
    )
      .then((res) => res.json())
      .then((data) => setMeals(data.results))
      .catch((error) => console.log(error));
  }, []);
{console.log(props.meals)}
  return (
    <>
      <div>
        {meals.map((m)=>(<Dish 
          key={m.idMeal}
          title={m.strMeal}
          description={m.strInstructions}
          poster={m.strMealThumb}
        />))}
      </div>
    </>
  );
};

export default Dishes;