import React from "react";
import './Content.css'
import helper from '../helper/helpers.jsx'
import RundomCatFacts from "../API/Animals";
import { useState } from "react";

export default function Content(props){
    const [helperText,setHelperText] = useState()
    function handler(value){
        console.log(helper(value))
    }    
    return <div className="Content">
      <div className="helperZone">
        <button onClick={()=>{handler(helperText)}}>check helper</button>    
        <input classNametype="text" onChange={(event)=>{setHelperText(event.target.value)}}/>  
      </div>

      <RundomCatFacts/>             
    </div>
}