import React, { useContext, useState } from "react";
import "./Cartpages.css";
import { ContextData } from "../Context";
import EmptyCart from "../asset/EmptyCart.jpg";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const { Cart, dispatch, total } = useContext(ContextData);

  // console.log(Cart);
  function handleQuantityPlus(n) {
    const data = Cart.findIndex((prod) => {
      return prod.id === n;
    });

    Cart[data].quantity += 1;

    dispatch({
      type: "CART_UPDATE",
      payload: data,
    });
  }

  function handleQuantityMinus(n) {
    const data = Cart.findIndex((prod) => {
      return prod.id === n;
    });

    Cart[data].quantity -= 1;

    dispatch({
      type: "CART_UPDATE",
      payload: data,
    });
  }

  return (
    <div className="cart">
      {Cart.length > 0 ? (
        <div className="Cart">
          <div className="cart_page">
            {Cart.map((cartitem, id) => (
              <div className="cart_page_details" key={cartitem.id}>
                <img src={cartitem.img} alt={id} />
                <div>
                  <span>$ {cartitem.price}</span>
                  <h3>{cartitem.title}</h3>
                  <p>{cartitem.description}</p>
                  <div className="quantity">
                    {cartitem.quantity <= 1 ? (
                      <button disabled={true}>-</button>
                    ) : (
                      <button
                        onClick={() => {
                          handleQuantityMinus(cartitem.id);
                        }}
                      >
                        -
                      </button>
                    )}

                    <span>{cartitem.quantity}</span>
                    <button
                      onClick={() => {
                        handleQuantityPlus(cartitem.id);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <Link to={`single/${cartitem.id}`}>
                    <button>Details</button>
                  </Link>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: cartitem.id,
                      });
                    }}
                    style={{ color: "red" }}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="billing_section">
            <h2>Billing</h2>

            <div className="billing">
              {Cart.map((cartitem) => (
                <div key={cartitem.id} className="billing_portion">
                  <img src={cartitem.img} alt={cartitem.id} />
                  <h3>${cartitem.price * cartitem.quantity}</h3>
                  <h3>{cartitem.quantity}</h3>
                </div>
              ))}
            </div>
            <div>
              <h3>
                Total_Cost - <span>${total}</span>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <img src={EmptyCart} alt={EmptyCart} />

          <h4>Missing Cart Items.</h4>
          <p>Lets go for some shopping...</p>
          <Link to="/">
            <button style={{ backgroundColor: "#A0C49D" }}>
              Lets go for Shoping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
