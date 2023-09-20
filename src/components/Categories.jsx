import React, { useContext } from "react";
// import Context from "../Context";
import './categories.css'

import { ContextData } from "../Context";

import Products from "./Products";

const Categories = () => {
  const {Category,setcategories,categories}=useContext(ContextData)
  console.log(categories)
  
  return (
    <div className="categories">
      <select
        onChange={(e) => {
          setcategories(e.target.value);
          
          
          
        }}
       value={categories}>
        <option value='All'>All</option>
        {Category.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
      <Products  />
    </div>
  );
};

export default Categories;
