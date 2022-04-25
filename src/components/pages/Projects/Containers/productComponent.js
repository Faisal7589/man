import React from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom"
import '../projects.css'
import Header from "./Header";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts);
    console.log(products)
    const {id, category} = products
    return(
        <div>
            <Header />
            <style>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </style>
            
    <div className="four column wide" key={id}>
    <Link to={`/projects/${id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src = "finance.png" alt=""/> 
                </div>
                <div className="content">
                    
                <div className="header">{category}</div>
                    
                </div>
            </div>
        </div>
        </Link>
    </div>
    
    
    </div>
    )
}

export default ProductComponent