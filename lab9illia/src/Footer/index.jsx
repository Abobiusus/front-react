import React from "react";
import './Footer.css';
import Menu from "../Menu";
import { connect } from 'react-redux';

function Footer({menuList}){
    return <div className="Footer">{new Menu(menuList)}</div>
}
const mapStateToProps = (state) => ({
    menuList: state.menuList.links,
})

export default connect(mapStateToProps)(Footer)