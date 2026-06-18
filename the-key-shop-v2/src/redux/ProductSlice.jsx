import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "switches", 
        products: [
            {name: "silent", img: "", price: 10.80}, 
            {name: "clicky", img: "", price: 23.40}, 
            {name: "linear", img: "", price: 25.20}, 
            {name: "tactile", img: "", price: 10.80}
        ]
    }, 
    {
        category: "keycaps", 
        products: [
            {name: "PBT", img: "", price: 60.00}, 
            {name: "DSA", img: "", price: 65.00}, 
            {name: "GMK", img: "", price: 127.00}
        ]
    }, 
    {
        category: "keyboards", 
        products: [
            {name: "the moderne", img: "", price: 125.00}, 
            {name: "timber", img: "", price: 150.00}, 
            {name: "noname", img: "", price: 300.00}
        ]
    }, 
    {
        category: "accessories", 
        products: [
            {name: "switch puller", img: "", price: 15.00}, 
            {name: "mini keyboard display", img: "", price: 50.00}, 
            {name: "kryox lube", img: "", price: 10.50}
        ]
    }
]

const productSlice = createSlice({
    name: "products", 
    initialState, 
    reducers: {
       
    }
})

export default productSlice.reducer; 
export const selectProducts = state => state.products