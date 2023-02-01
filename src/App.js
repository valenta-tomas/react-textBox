import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import TextBox from 'devextreme-react/text-box';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Test',
            cislo: 5
        };  

    }

    render() {
        return (
            <div>
                <TextBox
                mode={"text"}
                placeholder={"zadej svoje jméno"}
                showClearButton={true}/>
                <br />
                <TextBox
                    mode={"email"}
                    placeholder={"zadej svůj e-mail"}
                    showClearButton={true}
                />
                <br />
                <TextBox
                    mode={"password"}
                    placeholder={"zadej svůje heslo"}
                    showClearButton={true}
                />
                <br />
                <TextBox
                    mask="+000-000-000-000"
                    showClearButton={true}
                />
                <br/>
                <TextBox
                    readOnly={true}
                    value={"text, který nejde měnit"}
                />
                <div>{this.state.text}</div>
                <div>{this.state.cislo+this.state.cislo}</div>
            </div>
        );
    }
    
}

export default App;