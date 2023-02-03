import React from "react";
import Button from "../components/Button"
import {action} from "@storybook/addon-actions";
export default {
    title: "Button",
    component: Button,
}

export const test= ()=> <Button onClick={action("clicked")}>text</Button>;
export const test2= ()=> <Button onClick={action("clicked")}>1 2 3 </Button>;