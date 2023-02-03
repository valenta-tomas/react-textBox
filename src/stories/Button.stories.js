import React from "react";
import Button from "../components/Button"
import {action} from "@storybook/addon-actions";
export default {
    title: "Button",
    component: Button,
    args:{children: "original",
    background:"red",
        color:"black",
    width:100,
    height:50,
        fontSize:20}
}

export const test= (args)=> <Button {...args}/>;
export const test2= {args: {children: "zkouska",background: "blue", fontSize: 20, width: 150,height: 80}}



