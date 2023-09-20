import React, { createContext } from "react";
import { useReducer, useState, useEffect } from "react";
import { reducerfunction } from "./Reducer/reducer";

export const ContextData = createContext();

const Context = ({ children }) => {
  const [total, settotal]=useState(0)
  // For Selecting category...
  const [categories, setcategories] = useState("All");
  // Reducer....
  const [state, dispatch] = useReducer(reducerfunction, {
    products: [],
    Cart: [],
    Category: [],
  });
  // Destructring Reducer State....
  const { products, Cart, Category } = state;

  // Fetching All the Data and Setting Products Value...
  async function fetching() {
    let url = null;
    categories !== "All"
      ? (url = `https://dummyjson.com/products/category/${categories}`)
      : (url = "https://dummyjson.com/products");

    const fetchs = await fetch(url);
    const result = await fetchs.json();
    console.log(result);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: result.products,
    });
  }

  // Getting the Value of Category...and setting the value of Category..
  async function Categorys() {
    const Categorys = await fetch("https://dummyjson.com/products/categories");
    const categoriesResult = await Categorys.json();
    // console.log(categoriesResult)
    dispatch({
      type: "CATEGORY",
      payload: categoriesResult,
    });
  }

 

  // UseEffect for Calling All the API's...
  useEffect(() => {
    fetching();
    Categorys();
  
  }, [categories]);
 
console.log('heu',children)
  return (
    <ContextData.Provider
      value={{ Category, categories, Cart, dispatch, products, setcategories, total }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default Context;
