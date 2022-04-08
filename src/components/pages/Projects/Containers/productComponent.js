import React from "react";
import { useSelector } from "react-redux";
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
    <div className="four column wide">
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                
         <img src = "Screenshot (6).png" alt=""/> 
      
                        
                    
</div>
                <div className="content">
                    <a href="https://finance-faisal.herokuapp.com/">
                    <div className="header">{category}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default ProductComponent