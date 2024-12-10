import React from 'react';
import { connect } from 'react-redux';
import "./logo.css"



function Logo({logoPath}){
    return <a href='../App.jsx'><img src={logoPath} alt=""className="logo"/></a>
}

const mapStateToProps = (state) => ({
    logoPath: state.logo.value,
})

export default connect(mapStateToProps)(Logo)