import { createSlice } from "@reduxjs/toolkit";

//this needs to be an object with an instantiated array nested
const initialState = {cart: []}

//when added, if already in cart quantity ++, else set quantity as 1
//inverse for deleted
//{name, img, quantity}

const cartSlice = createSlice({
    name: "cart", 
    initialState, 
    reducers: { 
        addToCart(state, action) { 
            const {name, img, price} = action.payload; 

            const existing = state.cart.filter(item => item.name === name); 
             
            let item = {}
            if(existing && existing.length > 0){ 
                existing[0].quantity++; 
            } else {
                item = {name, img, price, quantity: 1}; 
                let updatedState = [...state.cart, item]; 
                state.cart = updatedState; 
            }   
            
        }, 
        updateQuantity(state, action){ 
            const {name, num} = action.payload; 
            const existing = state.filter(item => item.name === name); 

            if(existing && existing.length > 0){
                let itemToUpdate = existing[0] 
                itemToUpdate.quantity += num; //where num can be -1 or +1 depending on whether + or - clicked
            }

        }
        // increaseQuantity(state, action) {
        //     const {name, quantity} = action.payload; 


        //     if(existing && existing.quantity > 0){
        //         existing.quantity++; 
        //     }
        // }, 
        // decreaseQuantity (state, action) {
        //     const {name, quantity} = action.payload; 
        //     const existing = state.filter(item => item.name === name); 
        //     if(existing && existing.quantity)
        // }
    }
})

export const {addToCart, updateQuantity} = cartSlice.actions; 
export default cartSlice.reducer; 
export const selectCart = state => state.cart;