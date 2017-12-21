import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  

    render() {
        console.log("im here");
        return (
                <h1>Hello from react</h1>
        );
    }
}

render(<App />, document.getElementById('root'));