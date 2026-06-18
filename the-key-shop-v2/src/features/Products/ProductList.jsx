import React from "react";
import {useDispatch } from "react-redux"; 
import ProductCard from "./ProductCard";
const ProductList = ({products}) => { 
    
    return( 
        <>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <h2>{product.category}</h2>

                        {product.products.map((item, index) => (
                            <div key={index}>
                                <ProductCard product={item} />
                            </div>
                        ))}
                    </div>
                ))
            }
        </>
    )
}

export default ProductList; 