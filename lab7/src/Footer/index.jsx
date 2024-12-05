import React from "react";
import './Footer.css';
import Menu from "../Menu";

export default function Footer(props){
    return <div className="Footer">{new Menu(props.menu)}</div>
}