import React from "react";
import Navbar from "../components/Navbar";

import Front from "../components/Front";
import Popular from '../components/Popular'
import Footer from "../components/Footer";
import MostLiked from "../components/MostLiked";

const Home = ({ authenticated, setauthenticated }) => {
  return (
    <div>
      <Navbar
        authenticated={authenticated}
        setauthenticated={setauthenticated}
      />

      <Front />
      <Popular/>
      <MostLiked/>
      <Footer/>

    </div>
  );
};

export default Home;
