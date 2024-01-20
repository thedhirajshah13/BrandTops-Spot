import React from "react";
import Navbar from "../components/Navbar";

import Front from "../components/Front";
import Popular from '../components/Popular'
import Footer from "../components/Footer";

const Home = ({ authenticated, setauthenticated }) => {
  return (
    <div>
      <Navbar
        authenticated={authenticated}
        setauthenticated={setauthenticated}
      />

      <Front />
      <Popular/>
      <Footer/>

    </div>
  );
};

export default Home;
