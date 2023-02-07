import 'devextreme/dist/css/dx.light.css';
import React from "react";
import TextBox from "devextreme-react/text-box";
const Text = ({children,color,value,...rest}) =>{
    const style={
        color:color,
    }
    return(
        <TextBox style={style} placeholder={value} label={children}></TextBox>
    );
}
export default Text;