import TextAnimation from '../animations/textAnimation'
import React from 'react'


export default function TopSection() {
    return(
    <div style={{display: "flex", placeContent: "center", flexDirection: "column" , flexWrap:" wrap", borderBottomColor:"white", borderBottomWidth: 1}}>
        <h1 style={{display: "inline-block", position:"relative"}}> 
            Hello I am
        </h1>
        
        <TextAnimation />
    
      </div>
    )
}