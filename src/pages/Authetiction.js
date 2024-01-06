import React, { useState } from "react";
import Login from "../components/Login";
import { Routes, Route } from "react-router-dom";

const Authentiction=({authenticated, setauthenticated})=>{
   
    return(
        <Routes>
            <Route path="/" element={<Login 
    authenticated={authenticated}
    setauthenticated={setauthenticated}
/>}/>
        </Routes>

    )
}
   export default Authentiction;