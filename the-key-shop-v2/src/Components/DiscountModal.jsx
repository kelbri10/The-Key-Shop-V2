import React from "react";
import { useState, useEffect, useRef } from "react"; 


const DiscountModal  = () => { 
    const[email, setEmail] = useState(''); 
    const[isSignedUp, setIsSignedUp] = useState(false); 
    const[warning, setWarning] = useState(null); 
    const dialogRef = useRef(null) //where dialog reference refers to the dialog html element node

    const handleSubmit = (e) => {
        console.log(email);
        if(email !== ""){
            setIsSignedUp(true); 
        } else{ 
            setWarning('Please enter a valid email'); 
        }
    }

    return (
        <>
            <button id="dialog-toggle" onClick={()=> dialogRef.current.showModal()}>Show Discount Offer</button>

            <dialog ref={dialogRef}>
                {
                    isSignedUp ? (
                    <>
                        <h1>Thank you for signing up, {email}</h1>
                        <p>Check your email for a special discount code!</p>
                        <button id="dialog-toggle" onClick={()=> dialogRef.current.close()}>Close</button>
                    </> 
                    ) : (
                    <>
                        <h1> Become a member of the Insider Club! </h1>
                        <p> Sign up for free to our Inside Club and get access to special rewards! 20% off next purchase with special code to your inbox </p>

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <button onClick={() => handleSubmit()}>Submit</button>
                        <p>{warning}</p>

                        <button id="dialog-toggle" onClick={()=> dialogRef.current.close()}>No Thanks!</button>
                    </>
                    )
                }
            </dialog>
        </> 
    )
}

export default DiscountModal; 
