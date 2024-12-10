import React from "react";
import './Footer.css';
import { useSelector } from 'react-redux';
import Menu from "../Menu";

export default function Footer(props){
    const menuList = useSelector((state) => state.menuList.links);
    return <div className="Footer">{new Menu(menuList)}</div>
}