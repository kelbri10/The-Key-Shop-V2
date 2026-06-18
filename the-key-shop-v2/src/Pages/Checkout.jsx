import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { selectCart } from "../redux/CartSlice";
import { NavLink } from "react-router";
import Nav from "../features/Common/Nav";
const Checkout = () => { 
    const state = useSelector(selectCart) 
    console.log(JSON.stringify(state))
    return(
        <>
            <Nav />
            <NavLink to="/products">Continue Shopping</NavLink>
            <h1>Checkout</h1>

            <section>
                {
                    state.cart.map((item, index) => (
                        <div key={index}>
                            <img src="https://placehold.co/300x200" />
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>

                    ))
                }
                {/* {cartItems ? cart.map((item,index )=> (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                )) : <p>No Items in Cart</p>} */}
            </section>
        </>
    )
}

export default Checkout; 