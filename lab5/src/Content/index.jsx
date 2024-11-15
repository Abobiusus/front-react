import React from "react";
import './Content.css'
import helper from '../helper/helpers.jsx'
import { useState } from "react";

export default function Content(props){
    const [helperText,setHelperText] = useState()
    function handler(value){
        console.log(helper(value))
    }    
    return <div className="Content">
        <button onClick={()=>{handler(helperText)}}>check helper</button>    
        <input type="text" onChange={(event)=>{setHelperText(event.target.value)}}/>        
    </div>
}