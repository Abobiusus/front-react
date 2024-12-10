import React from 'react';
import { useSelector } from 'react-redux';
import "./logo.css"



export default function Logo(){
    const logoPath = useSelector((state)=>state.logo.value)
    return <a href='../App.jsx'><img src={logoPath} alt=""className="logo"/></a>
}
