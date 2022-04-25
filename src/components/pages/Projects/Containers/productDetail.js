import React from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ProductDetail = () => {

    const {productId} = useParams()
    console.log(productId)

    const products = useSelector((state) => state.allProducts);
    console.log(products)
    const { category, description} = products




    return(
        <>
        <style>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </style>

        <div className="ui grid container">
        {Object.keys(products).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                  
                <div className="column lp">
                  <img className="ui fluid image" src="finance.png" alt=""/>
                </div>
                
                <div className="column rp">
                  
                  
                  <h3 className="ui brown block header">{category}</h3>
                  <p style={{color:"black"}}>{description}</p>
                  <a href="https://finance-faisal.herokuapp.com/">
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    
                    <div className="visible content">visit</div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </>
    )
}

export default ProductDetail