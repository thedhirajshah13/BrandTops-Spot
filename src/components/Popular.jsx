import React, { useContext, useEffect, useState } from "react";
import "./popular.css";
import Context from "../context/Context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Popular = () => {
  const { state, dispatch, userDetails } = useContext(Context);
  const { Product } = state;
  const [popularPage, setpopularPage] = useState(0);
  useEffect(() => {
    async function fetchproduct() {
      const productData = await fetch(
        "https://dummyjson.com/products?limit=1000"
      );
      const data = await productData.json();
      dispatch({
        type: "FETCH PRODUCT",
        payload: data.products,
      });
    }
    
    fetchproduct();
  }, [userDetails]);

  useEffect(()=>{
    window.scrollTo({
        top:-100,
        left: 100,
        behavior: "smooth",
      });
  },[popularPage])

  console.log(state);

  return (
    <div className="popular">
      <h3>Hot Deals</h3>
      <div className="popular-sec">
        {popularPage > 0 ? (
          <button onClick={() => setpopularPage(popularPage - 1)}>
            <ArrowBackIosIcon />
          </button>
        ) : (
          ""
        )}

        {Product.filter(
          (discountPercentage) => discountPercentage.discountPercentage > 15
        )
          .slice(popularPage * 5, popularPage * 5 + 5)
          .map((prod, id) => (
            <div className="popular-card">
              <img src={prod.images[0]} alt="img" />
              <div className="title">
                <span>upto {prod.discountPercentage}% off</span>
                <h5>Deal Of The Day.</h5>
              </div>
              <p>{prod.description.slice(0, 30)}...</p>
            </div>
          ))}
        {popularPage <
        Product.filter(
          (discountPercentage) => discountPercentage.discountPercentage > 15
        ).length /
          5 -
          1 ? (
          <button onClick={() => setpopularPage(popularPage + 1)}>
            <ArrowForwardIosIcon />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Popular;
