import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "../Components/ProductList";
import { filterDisplay } from "../redux/ProductSlice";

const Products = () => { 
    const [filters, setFilters] = useState([]); 

    const products = useSelector(state => state.products)
    const dispatch = useDispatch(); 

    const handleFilter = () => { 
        useDispatch(filterDisplay(filters)); 
    }
    return (
        // there needs to be a component here that handles the checkbox and the filter to affect products and pass the filtered/unflitered products to product list
        <section>
            <h1>Products</h1>
            <fieldset> 
                <legend>Filter products: </legend>
                    <div>
                        <input type="checkbox" id="all" name="all" />
                        <label htmlFor="all">All</label>
                    </div>
                    {products.map((cluster, index) => 
                        (
                            <div key={index}>
                                <input type="checkbox" id={cluster.category} name={cluster.category}/>
                                <label htmlFor={cluster.category}>{cluster.category}</label>
                            </div>
                        )
                    )}
            </fieldset>
            <ProductList products={products} />
        </section>
    )
}

export default Products; 