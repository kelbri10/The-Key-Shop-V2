import React from "react";
import { useState, useEffect, useRef } from "react"; 

const DiscountModal  = () => { 
    const[email, setEmail] = useState(); 
    const dialogRef = useRef(null) //where dialog reference refers to the dialog html element node

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(email === ""){ 
            console.log('Please enter an email');   
        }
        console.log(`Thank you for signing up. Check your email ${email} to get a thank you discount on us!`); 
    }

    return (
        <>
            <button id="dialog-toggle" onClick={()=> dialogRef.current.showModal()}>Show Discount Offer</button>

            <dialog ref={dialogRef}>
                <h1> Become a member of the Insider Club! </h1>
                <p> Sign up for free to our Inside Club and get access to special rewards! 20% off next purchase with special code to your inbox </p>

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input 
                    type="submit" 
                    name="submit-email" 
                    id="submit-email" 
                    value="Sign me up!" 
                    onSubmit={(e)=> handleSubmit(e)} />


                <button id="dialog-toggle" onClick={()=> dialogRef.current.close()}>No Thanks!</button>
            </dialog>
        </> 
    )
}

export default DiscountModal; 
