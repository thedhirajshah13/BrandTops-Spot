import React from "react";
import Navbar from "../components/Navbar";

import Front from "../components/Front";
import Popular from '../components/Popular'

const Home = ({ authenticated, setauthenticated }) => {
  return (
    <div>
      <Navbar
        authenticated={authenticated}
        setauthenticated={setauthenticated}
      />

      <Front />
      <Popular/>
    </div>
  );
};

export default Home;
