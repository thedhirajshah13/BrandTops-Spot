import React, { useContext, useState } from "react";
import { ContextData } from "../Context";
import { useParams } from "react-router-dom";
import "./ProducDetails.css";

const ProductDetails = () => {
  const [imgs, setimgs] = useState(0);
  const { Cart, products, dispatch } = useContext(ContextData);
  const { id } = useParams();
  console.log(typeof id);
  // Finding the product from product list with the help of param id...
  const data = [products.find((dat) => dat.id === Number(id))];
  // console.log(data);
  function handleclick(n) {
    setimgs(n);
    // console.log(img)
  }

  return (
    <div className="single-page">
{/* Mapping Data ... */}
      {data.map((prod) => (
        <div>
          <div className="details">
            <div className="img">
              <img src={prod.images[imgs]} alt={prod.id} />
            </div>
            <div className="others">
              <h1>{prod.title}</h1>
              <p>{prod.description}</p>
              <div className="itemdescription">
                <h4>
                  Category:-<span>{prod.category}</span>{" "}
                </h4>
                <h4>
                  {" "}
                  In Stock:- <span>{prod.stock}</span>
                </h4>
              </div>
              <div className="branddescription">
                <h4>
                  Brand:- <span>{prod.brand}</span>
                </h4>
                <h4>
                  Rating:- <span>⭐{prod.rating}</span>
                </h4>
              </div>
              <div className="pricing">
                <h4>Price:- ${prod.price}</h4>
                {Cart.some((cart) => cart.id === prod.id) ? (
                  <button
                    style={{ color: "red" }}
                    onClick={() => {
                      dispatch({
                        type:'REMOVE_FROM_CART',
                        payload:prod.id,
                      });
                    }}
                  >
                    Remove From Cart
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
                    }}
                    style={{ color: "green" }}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="arrayimage">
            {prod.images.map((img, i) => (
              <img
                src={img}
                onClick={() => {
                  handleclick(i);
                }}
                style={
                  imgs === i
                    ? { border: "2px solid red", boxShadow: "5px 10px #888888" }
                    : { border: "1px solid black" }
                }
                alt={i}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
