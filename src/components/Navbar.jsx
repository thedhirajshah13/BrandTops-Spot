import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../asset/logon.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { ContextData } from "../Context";

const Navbar = () => {
  const { Cart } = useContext(ContextData);
  return (
    <div className="navbar">
      <div className="nav-item1">
        <Link
          to="/"
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
          Home
        </Link>
        <Link
          to=""
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
          Carrier
        </Link>
        <Link
          to=""
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
         
          Cart
        </Link>
      </div>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-item2">
        <Link
          to="/"
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
          About
        </Link>
        <Link
          to="/Gifts"
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
          Gifts
        </Link>
        <Link
          to="/cart"
          style={{ padding: "20px", textDecoration: "none", color: "#000" }}
        >
          <ShoppingCartOutlinedIcon
            style={{
              
            }}
          />
          <span
            style={{
              position:'absolute',
              top:'5px',
              left:'96.6%',
            
              color: "red",
             
             
              height: "20px",
            }}
          >
            {Cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
