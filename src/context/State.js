import React, { useState } from 'react';
 
import Context from './Context';

const State=(props)=>{
    const [userDetails, setuserDetails]=useState()
    return (
<Context.Provider value={{userDetails, setuserDetails}}>
    {props.children}
</Context.Provider>
    )
}

export default State;