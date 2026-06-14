import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "../features/Products/ProductList";
import { filterDisplay, selectProducts} from "../redux/ProductSlice";

const Products = () => { 
    const allProducts = useSelector(selectProducts)
    
    const [filters, setFilters] = useState([]); 
    const [displayProducts, setDisplayProducts] = useState(allProducts); 
    
    const dispatch = useDispatch(); 


    const handleChange = (e) => { 
        let updatedFilters = []; 

        if (e.target.checked){ 
            updatedFilters = [...filters, e.target.value]; 
        } else {
            updatedFilters = filters.filter(cat => cat !== e.target.value); 
        }
        setFilters(updatedFilters);  
        
    }

    useEffect(() => { 
        let filtered = []; 
        if(filters.length > 0){
            filtered = allProducts.filter(product => filters.includes(product.category)); 
            setDisplayProducts(filtered); 
        } else { 
            setDisplayProducts(allProducts); 
        }
        
    }, [filters])
    return (
        // there needs to be a component here that handles the checkbox and the filter to affect products and pass the filtered/unflitered products to product list
        <section>
            <h1>Products</h1>
            <fieldset> 
                <legend>Filter products: </legend>
                    {allProducts.map((cluster, index) => 
                        (
                            <div key={index}>
                                <input type="checkbox" id={cluster.category} name={cluster.category} value={cluster.category}
                                onChange={(e) => handleChange(e)}/>
                                <label htmlFor={cluster.category}>{cluster.category}</label>
                            </div>
                        )
                    )}
            </fieldset>
            <ProductList products={displayProducts} />
        </section>
    )
}

export default Products; 