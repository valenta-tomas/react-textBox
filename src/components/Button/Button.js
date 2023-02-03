import React from "react";
//import "./Button.css";
import * as PropTypes from "prop-types";


const Button = ({ children,background,color,width ,height,fontSize,...rest}) =>{
    const style ={
        backgroundColor:background,
        color:color,
        border:"none",
        width:width,
        height:height,
        fontSize:fontSize,
    }
    return(
        <button className={"button"} style={style} {...rest}>
            { children }
        </button>
    );
}
export default Button;