import React, { useContext, useState } from 'react'
// css has same as popular's css...
import "./popular.css";
import Context from "../context/Context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from 'react-router-dom';

const MostLiked=()=>{
  const {state,dispatch}=useContext(Context);
  const {Product}=state
  const[popularPage,setpopularPage]=useState(0);
  const Navigate=useNavigate()

    return(
        <>
<div className="popular">
      <h3>Most Liked</h3>
      <div className="popular-sec">
        {popularPage > 0 ? (
          <button onClick={() => setpopularPage(popularPage - 1)}>
            <ArrowBackIosIcon />
          </button>
        ) : (
          ""
        )}

        {Product.filter(
          (rating) => rating.rating > 4.9
        )
          .slice(popularPage * 5, popularPage * 5 + 5)
          .map((prod, id) => (
            <div className="popular-card">
              <img src={prod.images[0]} alt="img" onClick={()=>Navigate(`/productDetails/${prod.id}`)} />
              <div className="title">
                <span style={{backgroundColor:'green', color:'white'}}> {prod.rating}☆</span>
                <h5 style={{color:'green'}}>Most Trusted.</h5>
              </div>
              <p>{prod.description.slice(0, 30)}...</p>
            </div>
          ))}
        {popularPage <
        Product.filter(
          (rating) => rating.rating >   4.9
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
  
        </>
    )
}

export default MostLiked;