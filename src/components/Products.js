import React, { useContext } from "react";
import "./products.css";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { ContextData } from "../Context";

const Products = () => {
  const { products, Cart, dispatch } = useContext(ContextData);
  // console.log(products)
  return (
    <div className="product-list">
      {products ? (
        products.map((prod) => (
          <div key={prod.id} className="product">
            <div className="img">
              <img src={prod.thumbnail} alt={prod.id} />
            </div>

            <div className="details">
              <p>{prod.title}</p>
              <p>${prod.price}</p>
            </div>
            {Cart.some((pro) => pro.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod.id,
                  });
                }}
                style={{ color: "red" }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      quantity:1,
                      img:prod.thumbnail,
                      price:prod.price,
                      description:prod.description


                    },
                  });
                  console.log(Cart);
                }}
                style={{ color: "green" }}
              >
                ADD TO CART
              </button>
            )}
            <Link to={`single/${prod.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))
      ) : 'NOT FOUND ANYTHINGS'}
    </div>
  );
};

export default Products;
