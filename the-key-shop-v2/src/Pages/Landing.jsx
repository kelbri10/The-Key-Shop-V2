import React from "react"; 
import {useState, useEffect} from "react"; 
import Popover from "../Components/DiscountModal";

const Landing = () => {  
    return (
        <div> 
            <h1> The Key Shop </h1>
            <Popover />
        </div> 
    )
}

export default Landing; 