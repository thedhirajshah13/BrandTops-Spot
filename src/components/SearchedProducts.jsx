import React, { useContext, useState } from "react";
import "./searchedProducts.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Context from "../context/Context";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useNavigate } from 'react-router-dom';
const SearchedProducts = () => {
  const Navigate=useNavigate()
  
  const { state, dispatch } = useContext(Context);
  const { Searched, Product, Cart } = state;
  console.log(Searched, Cart);

  const ADDTOCART = (prod) => {
    dispatch({
      type: "ADD TO CART",
      payload: prod,
    });
    //    console.log(Cart.length)
  };

  const REMOVECART = (prodId) => {
    console.log(prodId);
    dispatch({
      type: "REMOVE FROM CART",
      payload: prodId,
    });
    console.log(Cart);
  };

  console.log(Cart.length);

  return (
    <>
      <div className="search">
        <Navbar />
        <div className="searchedProducts">
          <div className="sidepanel">
            <h1>FILTERS</h1>
          </div>
          <div className="mainpanel">
            {Searched.length <= 0
              ? Product.map((prod) => (
                  <div className="searched-card">
                    <img src={prod.images[0]} alt="img" onClick={()=>Navigate(`/productDetails/${prod.id}`)} />
                    <div className="title">
                      <span>upto {prod.discountPercentage}% off</span>
                      <h5>Deal Of The Day.</h5>
                    </div>
                    <p>{prod.description.slice(0, 30)}...</p>
                    {Cart.some((cart) => cart.id === prod.id) ? (
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          width: "100%",
                        }}
                        onClick={() => REMOVECART(prod.id)}
                      >
                        {<RemoveShoppingCartIcon />}REMOVE FROM CART
                      </button>
                    ) : (
                      <button
                        onClick={() => ADDTOCART(prod)}
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        {<ShoppingCartOutlinedIcon />}ADD TO CART
                      </button>
                    )}
                  </div>
                ))
              : Searched.map((prod) => (
                  <div className="searched-card">
                    <img src={prod.images[0]} alt="img" onClick={()=>Navigate(`/productDetails/${prod.id}`)} />
                    <div className="title">
                      <span>upto {prod.discountPercentage}% off</span>
                      <h5>Deal Of The Day.</h5>
                    </div>
                    <p>{prod.description.slice(0, 30)}...</p>
                    {Cart.some((cart) => cart.id === prod.id) ? (
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          width: "100%",
                        }}
                        onClick={() => REMOVECART(prod.id)}
                      >
                        {<RemoveShoppingCartIcon />}REMOVE FROM CART
                      </button>
                    ) : (
                      <button
                        onClick={() => ADDTOCART(prod)}
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        {<ShoppingCartOutlinedIcon />}ADD TO CART
                      </button>
                    )}
                  </div>
                ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SearchedProducts;
