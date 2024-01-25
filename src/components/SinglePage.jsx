import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./singlePage.css";
import { useParams } from "react-router-dom";
import Context from "../context/Context";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "@emotion/styled";

const SinglePage = () => {
  const { state } = useContext(Context);
  const { Product } = state;
  const { prodId } = useParams();
  const[imgNo, setimgNo]=useState(0)
  return (
    <>
      <Navbar />
      <div className="singleProduct">
        {Product.filter((prod) => prod.id == prodId).map((prod) => (
          <div className="card">
            <div className="allImages">
              {prod.images.map((img, id) => (
                
                <img src={img}  onClick={()=>setimgNo(id)} style={id==imgNo?{border:'2px solid blue'}:{border:'none'}}/>
              ))}
            </div>
            <div className="singleImage">
              <img src={prod.images[imgNo]} />
              
            <button>{<ShoppingCartOutlinedIcon/>}Add to Cart</button>
              
            </div>
            <div className="details">
              <h2>{prod.brand}</h2>
              <span>{prod.rating}</span>
              <h3>{prod.price}</h3>
              <p>{prod.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
