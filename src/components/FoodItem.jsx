export default function FoodItem({ food }) {
  return (
    <>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
    </>
  );
}
