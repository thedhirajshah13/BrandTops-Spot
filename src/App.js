import React, { useState } from "react";
import './App.css'
import Home from "./pages/Home";
import {

  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Authentication from "./pages/Authetiction.js";
import State from "./context/State.js";
import Footer from "./components/Footer.jsx";
import Search from "./pages/Search.js";
import SinglePage from "./components/SinglePage.jsx";

const PrivateRoute = ({ authenticated }) => {
  return authenticated ? <Outlet /> : <Navigate replace to="/" />;
};

const App = () => {
  const [authenticated, setauthenticated] = useState(false);
  return (
    <BrowserRouter>
      <State>
        <Authentication
          authenticated={authenticated}
          setauthenticated={setauthenticated}
        />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute authenticated={authenticated}></PrivateRoute>
            }
          >
            <Route
              path="home"
              element={
                <Home
                  authenticated={authenticated}
                  setauthenticated={setauthenticated}
                />
              }
            />
            <Route
              path="search"
              element={<Search/>}

            />
            <Route path="productDetails/:prodId" element={<SinglePage/>}/>

            
            
          </Route>
        </Routes>
      </State>
    </BrowserRouter>
  );
};

export default App;
