import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <>
      {isLoading
        ? "True"
        : food.extendedIngredients.map((item) => {
            return <Item item={item}></Item>;
          })}
      {}
    </>
  );
}
