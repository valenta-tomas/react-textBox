import React from "react";
import TextBox from "devextreme-react/text-box";
const Text = ({children,color,value,...rest}) =>{
    const style={
        color:color,
    }
    return(
        <TextBox style={style} value={value}> { children }</TextBox>
    
    );
}
export default Text;