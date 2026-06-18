import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { selectCart, deleteFromCart } from "../redux/CartSlice";
import { NavLink } from "react-router";
import Nav from "../features/Common/Nav";
const Checkout = () => { 
    const state = useSelector(selectCart) 
    const dispatch = useDispatch(); 

    const calculateTotalPrice = () => { 
        let total = 0; 
        state.cart.forEach(item => total += (item.price * item.quantity)) 
        return total.toFixed(2); 
    }

    const handleDelete = (index) => {
        dispatch(deleteFromCart(index))
    }
  
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
                            <p>${item.price.toFixed(2)}</p>
                            <button onClick={()=> handleDelete(index)}>Delete Item</button>
                        </div>

                    ))
                }
                <p>Total Price: ${calculateTotalPrice()}</p>
            </section>
        </>
    )
}

export default Checkout; 