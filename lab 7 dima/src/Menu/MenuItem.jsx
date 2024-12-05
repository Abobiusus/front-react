import React from "react";

export default function MenuItem(text, url){
    if (url) {
        return(<li key={text}><a href={url} target={url == window.location.href?'_self':'_blank'}>{text}</a></li>)
    }else{
        return(<li key={text}><span>{text}</span></li>)
    }  
}