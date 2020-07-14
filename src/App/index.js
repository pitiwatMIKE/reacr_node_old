import React, { Component } from 'react';
import ButtonRegister from "../register/ButtonRegister";
import ButtonShowdata from "../showdata/ButtonShowdata";
import Facebook from "./Facebook";
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
            <div className="btn-group btn-group-lg"><ButtonRegister/><ButtonShowdata/></div>
            <div className="mt-4"><Facebook/></div>
        </div>
      </div>
    );
  }
}

export default App;
