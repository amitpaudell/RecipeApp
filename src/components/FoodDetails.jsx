import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "9987792d70bb426bbf2d9011d328a3b0";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>

      <div>
        <span>
          <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>Serves{food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
        <span>{food.vegan ? "Vegan" : ""}</span>
      </div>

      <div>
        <span>${(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => {
            return <li>{step.step}</li>;
          })
        )}
      </div>
    </div>
  );
}
