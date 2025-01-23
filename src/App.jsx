import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import FoodDetails from "./components/FoodDetails";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <>
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}></FoodList>
        </InnerContainer>

        <InnerContainer>
          <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
