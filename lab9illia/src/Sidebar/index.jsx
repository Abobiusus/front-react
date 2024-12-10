import React from "react";
import './Sidebar.css'
import Menu from "../Menu";
import { connect } from 'react-redux';

function Sidebar({menuList}){
    return <div className="Sidebar">
        {new Menu(menuList)}
    </div>
}

const mapStateToProps = (state) => ({
    menuList: state.menuList.links,
})

export default connect(mapStateToProps)(Sidebar)