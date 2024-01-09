import React, { useReducer, useState } from 'react';
import { Reducerfun } from '../Reducer/Reducerfun';
 
import Context from './Context';

const State=(props)=>{
    const [userDetails, setuserDetails]=useState()
    const initialState={
        Product:[],
        Cart:[],

    }

    const [state, dispatch]=useReducer(Reducerfun,initialState);
    return (
<Context.Provider value={{userDetails, setuserDetails, state, dispatch}}>
    {props.children}
</Context.Provider>
    )
}

export default State;