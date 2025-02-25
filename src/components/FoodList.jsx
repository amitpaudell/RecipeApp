import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((food) => {
        return <FoodItem key={food.id} food={food} setFoodId={setFoodId}></FoodItem>;
      })}
    </>
  );
}
