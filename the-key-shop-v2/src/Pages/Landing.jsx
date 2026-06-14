import React from "react"; 
import {useState, useEffect} from "react"; 
import DiscountModal from "../features/Landing/DiscountModal";
import Hero from "../features/Landing/Hero";

const Landing = () => {  
    return (
        <>
            <Hero />
            <DiscountModal />
        </>
    )
}

export default Landing; 