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
        deleteFromCart(state, action) {
            const index = action.payload; 
            let updated = state.cart.filter(item => state.cart.indexOf(item) !== index); 
            state.cart = updated; 
        },
        updateQuantity(state, action){ 
            const {item, operation} = action.payload; 
            const existing = state.cart.filter(cartItem => cartItem.name === item.name); 
            let updatedQuantity; 
            if(existing && existing.length > 0){ 
                if(operation === "increase"){
                    if(existing[0].quantity + 1 <= 5){ 
                        let itemToUpdate = {...existing[0], quantity: existing[0].quantity++}; 
                    } 
                } else { 
                    if(existing[0].quantity - 1 > 0){
                        let itemToUpdate = {...existing[0], quantity: existing[0].quantity--}; 
                    } 
                }
                
            }


        }
    }
})

export const {addToCart, deleteFromCart, updateQuantity} = cartSlice.actions; 
export default cartSlice.reducer; 
export const selectCart = state => state.cart;