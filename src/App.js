import 'devextreme/dist/css/dx.light.css';
import React, { Component } from 'react'
import {TextBox } from 'devextreme-react'
import { useState } from 'react';

function Valid(valid = "pending") {
  const[value,setValue] = useState(valid);
  let v = value==="pending" ? "pending" : "valid";
  return(v)
}

export default class App extends Component {


  
  render() {
    return (
      <TextBox 
       label='zadej email'
       labelMode='floating'
        mode='mail'
        validationStatus="pending"//{Valid}
        maxLength={15}
         onChange={()=> console.log("změna")}
          onCopy={()=>console.log("copy")}
   
      /> 
    )
  }
}
