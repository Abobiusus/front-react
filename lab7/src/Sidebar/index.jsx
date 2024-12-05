import React from "react";
import './Sidebar.css'
import Menu from "../Menu";

export default function Sidebar(props){
    return <div className="Sidebar">
        {new Menu(props.menu)}
    </div>
}