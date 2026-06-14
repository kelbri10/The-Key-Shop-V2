import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router";
const Nav = () => { 
    const[searchQuery, setSearchQuery] = useState(''); 

    return(
        <section id="stickyheader">
            <nav>
                <img alt="company logo for The Key Shop" /> 
                <ul role="menubar">
                    <li><NavLink role="menuitem" to="/products">Shop</NavLink></li> 
                    {/* prefer navlink because it has isActive, isPending states that can be used for styling purposes */}
                    <li><a role="menuitem" href="">About Us</a></li>
                    <li><a role="menuitem" href="">Community</a></li>
                </ul>
            </nav> 

            <article>
                <label htmlFor="site-search">What are you looking for?</label>
                <input 
                    type="search" 
                    id="site-search" 
                    value={searchQuery} 
                    name="search" 
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <button onClick={()=> console.log(searchQuery)}>Search</button>
            </article>
        </section>
    )

}

export default Nav; 