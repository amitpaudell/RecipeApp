import styles from "./search.module.css";
import { useEffect, useState } from "react";
export default function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "9987792d70bb426bbf2d9011d328a3b0";
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} type="text" name="" id="" onChange={(e) => setQuery(e.target.value)} value={query} />
    </div>
  );
}
