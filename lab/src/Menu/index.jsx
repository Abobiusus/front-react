import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem.jsx' 


export default function Menu(list){

    let MenuItems = []
    list.forEach(element => {
        MenuItems.push(MenuItem(element.text, element.url))
    });

    return (
        <ul>
            {MenuItems}
        </ul>
    )
}