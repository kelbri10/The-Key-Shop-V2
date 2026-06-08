import React from "react"; 
import {useState, useEffect} from "react"; 
import DiscountModal from "../Components/DiscountModal";
import Hero from "../Components/Hero";

const Landing = () => {  
    return (
        <>
            <Hero />
            <DiscountModal />
        </>
    )
}

export default Landing; 