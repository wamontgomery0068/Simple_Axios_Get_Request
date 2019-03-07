import React, { Component } from 'react';
import Luke from './Images/Luke.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App_Container">
        <div className = "Card_Container">
          <div className = "Card_Top_Inner_Box">
            <div className = "Card_Top_Left"></div>
            <div className = "Card_Top_Right">
              <img className = "Card_Image" src = { Luke } />
            </div>
          </div>
          <div className = "Card_Bottom_Inner_Box"></div>
        </div>
      </div>
    );
  }
}

export default App;
