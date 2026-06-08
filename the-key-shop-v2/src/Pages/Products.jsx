import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../Components/ProductList";

const Products = () => { 
    const products = useSelector(state => state.products)
    return (
        <ProductList products={products} filter={[]} />
    )
}

export default Products; 