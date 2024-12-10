import React from "react";
import './Footer.css';
import Menu from "../Menu";
import { useSelector } from 'react-redux';

export default function Footer(props){
    const menuList = useSelector((state) => state.menuList.links);
    return <div className="Footer">{new Menu(menuList)}</div>
}