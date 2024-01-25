import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logon.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import Context from "../context/Context";

const Navbar = ({ authenticated, setauthenticated }) => {
  const { userDetails, state, dispatch } = useContext(Context);
  const { Product, Cart } = state;
  const [search, setsearch] = useState("");
  const Naviagte=useNavigate()
  // console.log(userDetails)
  console.log(search);
  function hadlelogout() {
    setauthenticated(false);
    alert("logedout");
  }

  function searchProducts() {
    const searchedProducts = Product.filter(
      (prod) =>
        prod.title.toLowerCase().includes(search) ||
        prod.brand.toLowerCase().includes(search) ||
        prod.category.toLowerCase().includes(search) ||
        prod.description.toLowerCase().includes(search)
    );
dispatch(
  {
    type:'SEARCHED PRODUCTS',
    payload:searchedProducts
  }
)

Naviagte('/search')
    
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navitem">
          <Link>Home</Link>

          <Link>Explore</Link>
          <Link>New </Link>
          <Link>Contact-Us</Link>
        </div>
        <div className="search">
          {/* <p>Search here</p> */}
          <input
            type="text"
            placeholder="Search for Products, Brands and more."
            value={search}
            onChange={(e) => setsearch(e.target.value.toLowerCase())}
          />
          <button onClick={searchProducts}>
            {" "}
            <Link>{<SearchIcon />}</Link>
          </button>
        </div>
        <div className="profile">
          <Link>{<FavoriteIcon className="wishbtn" />}</Link>
          <Link>{Cart.length}{ <ShoppingCartOutlinedIcon />}</Link>
          <Link onClick={hadlelogout}>
            <img src={userDetails.image} alt=<Person3Icon /> />{" "}
            <span>{userDetails.firstName}</span>
          </Link>
        </div>
      </div>
      <div className="announcement">
        <p>Invite Friends and get 50% off on your next purchase</p>
        <span>Invite Now</span>
        <button>{<ClearIcon />}</button>
      </div>
    </>
  );
};

export default Navbar;
