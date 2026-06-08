import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "switches", 
        products: [
            {name: "silent", img: "", price: "$20.50"}, 
            {name: "clicky", img: "", price: "72.00"}, 
            {name: "linear", img: "", price: "$10.74"}, 
            {name: "tactile", img: "", price: "$10.80"}
        ]
    }, 
    {
        category: "keycaps", 
        products: [
            {name: "PBT", img: "", price: ""}, 
            {name: "DSA", img: "", price: ""}
        ]
    }, 
    {
        category: "keyboards", 
        products: [
            {name: "the moderne", img: "", price: ""}, 
            {name: "timber", img: "", price: ""}, 
            {name: "noname", img: "", price: ""}
        ]
    }, 
    {
        category: "accessories", 
        products: [
            {name: "switch puller", img: "", price: ""}, 
            {name: "mini keyboard display", img: "", price: ""}, 
            {name: "kryox lube", img: "", price: ""}
        ]
    }
]

const productSlice = createSlice({
    name: "products", 
    initialState, 
    reducers: {
        updateSwitchQuantity: (state, action) => { 
            const { name, quantity} = action.payload; 
            //i want to update so that when a person increase the number they want added to thier cart the quantity shows 18 * quantity for total buying if applicable
        },
        filterDisplay: (state, action) => { 
            const { categoryFilter } = action.payload 

            const filtered= state.filter(products=> categoryFilter.includes(products.category))

            return filtered; 
            //when the user selects specific category or categories display filters to show only what is selected, not sure of checkbox or dropdown
        }
    }
})

export const {filterDisplay} = productSlice.actions; 
export default productSlice.reducer; 