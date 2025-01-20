import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <FoodList foodData={foodData}></FoodList>
    </>
  );
}

export default App;
