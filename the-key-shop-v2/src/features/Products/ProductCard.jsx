import React from "react";
import {useDispatch, useSelector } from "react-redux"; 
import { addToCart, selectCart } from "../../redux/CartSlice";

const ProductCard = ({product}) => { 
    const dispatch = useDispatch(); 
    
    const {name, img, price} = product; 
    const handleClick = ({name, img, price}) => { 
        dispatch(addToCart({name, img, price})); 
    }

    return(
        <div>
            <img src="https://placehold.co/600x400" alt="placeholder image with 600 x 400 px display" />
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
            <button onClick={() => handleClick({name, img, price})}>Add to Cart</button>
        </div>
    )
}

export default ProductCard; 