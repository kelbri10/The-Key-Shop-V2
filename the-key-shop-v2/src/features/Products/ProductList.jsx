import React from "react";
import {useDispatch } from "react-redux"; 

const ProductList = ({products}) => { 
    
    return( 
        <>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <h2>{product.category}</h2>

                        {product.products.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                ))
            }
        </>
    )
}

export default ProductList; 