import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss'

class Button extends Component {
    render() {
        return <a href=''>Enviar</a> 
    }
}

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1> Hello Eudes!</h1>
                <h2 style={{ color: "#F00" }}> Teste </h2>
                <Button />
            </Fragment>
        )
    }
}

render(<App />, document.getElementById('app'));
