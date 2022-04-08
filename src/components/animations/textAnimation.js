import React, { useEffect, useState } from 'react'
import { useInterval } from 'react-use';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {

    const Faisal = "Faisal".split("")
    const SoftwareEngineer = "                SoftwareDeveloper".split("")
    const WebDeveloper = "                WebDeveloper".split("")
    const GameDeveloper = "                GameDeveloper".split("")

    const [item, setItem] = useState(Faisal)
    const [count, setCount] = useState(0)
    const [jimin, setBts] = useState(false)

    useInterval(
        () => {
            setItem(Faisal)
            setCount(count + 1)

            if (count === 1) {
                setCount(2)
                setItem(WebDeveloper)    
            }
            if(count === 2){
                setCount(3)
                setItem(SoftwareEngineer)
                
            }
            if(count === 4){
                setCount(0)
                setItem(GameDeveloper)
                
            }

            

            
        },
        jimin ? 7000 : null
    )

    useEffect(() => {
        const chingChong = setTimeout(() => {
        setItem(SoftwareEngineer)
        setBts(true)
    }, 4000)
    return() => clearTimeout(chingChong)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return(
        <Name style={{padding:'20px', paddingTop:'20px', justifyContent: "center"}}>

            {item.map((item, index) => (
                <span key={index}>{item}</span>
            ))} 
        </Name>
    )
}

//joe
const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(1px); }
25% { opacity: 1; transform: translateY(0); }
75% { opacity: 0; transform: translateY(); }
100% { opacity 1; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); }
`
//iifjdslfasifsidjfjioaeiogjodijjoidasg
const Name = styled.span`
display: inline-flex;
flex-direction: row;
font-weight: bold;


    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.00001, 1, 0.0001, 1)
    }
    span:nth-child(1){
        animation-delay:0.1s;

    }
    span:nth-child(2){
        animation-delay:0.2s;
        
    }
    span:nth-child(3){
        animation-delay:0.3s;
        
    }
    span:nth-child(4){
        animation-delay:0.4s;
        
    }
    span:nth-child(5){
        animation-delay:0.5s;
        
    }
    span:nth-child(6){
        animation-delay:0.6s;
        
    }
    span:nth-child(7){
        animation-delay:0.7s;
        
    }
    span:nth-child(8){
        animation-delay:0.8s;
        
    }
    span:nth-child(9){
        animation-delay:0.9s;
        
    }
    span:nth-child(10){
        animation-delay:1.0s;
        
    }
    span:nth-child(11){
        animation-delay:1.1s;
        
    }
    span:nth-child(12){
        animation-delay:1.2s;
        
    }
    span:nth-child(13){
        animation-delay:1.3s;
    }
    span:nth-child(14){
        animation-delay:1.4s;
    }
    span:nth-child(15){
        animation-delay:1.5s;
    }
    span:nth-child(16){
        animation-delay:1.6s;
    }

`