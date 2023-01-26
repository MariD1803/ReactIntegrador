import React from "react";
import '../../App.css'

const Navbar = ( props) => {
    return (
        
        <div className={props.className} > {props.children} </div>
        
        
    )
}

export default Navbar