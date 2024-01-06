import React from "react";
import Navbar from "../components/Navbar";

import Front from "../components/Front";

const Home = ({ authenticated, setauthenticated }) => {
  return (
    <div>
      <Navbar
        authenticated={authenticated}
        setauthenticated={setauthenticated}
      />

      <Front />
    </div>
  );
};

export default Home;
