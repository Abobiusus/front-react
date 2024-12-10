import React from "react";
import './Sidebar.css'
import Menu from "../Menu";
import { useSelector } from 'react-redux';

export default function Sidebar(props){
    const menuList = useSelector((state) => state.menuList.links);
    return <div className="Sidebar">
        {new Menu(menuList)}
    </div>
}