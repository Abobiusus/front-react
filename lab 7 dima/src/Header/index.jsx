import React from "react";
import './Header.css'
import Logo from "../Logo/Logo";
import DateTime from "../DateTime"

export default function Header(props){
    return <div className="Header">{<Logo/>}{<DateTime/>}</div>
}