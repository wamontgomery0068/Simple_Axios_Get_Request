import React, { Component } from 'react';
import axios from 'axios';

import Luke from './Images/Luke.jpg';
import Crest from './Images/Crest.png';
import Logo from './Images/Logo.png';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      lukeSkywalker: "" 
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then( response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    // console.log(this.state.lukeSkywalker)
    return (
      <div className = "App_Container">
        <div className = "Card_Container">
          <div className = "Card_Top_Inner_Box">
            <div className = "Card_Top_Left">
              <div className = "Card_Top_Jedi">
                <div className = "Card_Top_Jedi_Circle">
                  <img className = "Jedi_Crest" src = { Crest } alt = "Jedi" />
                </div>
                <p className = "Number_Text"> #1 </p>
              </div>
              <p className = "Name_Text"> {this.state.lukeSkywalker.name} </p>
              <div className = "Occupation_Container">
                <p className = "Occupation_Text"> Jedi Knight </p>
              </div>
              <div className = "StarWars_Container">
                <img className = "StarWars_Logo" src = { Logo} alt = "Star Wars" />
              </div>
            </div>
            <div className = "Card_Top_Right">
              <img className = "Card_Image" src = { Luke } alt = "Luke" />
            </div>
          </div>
          <div className = "Card_Bottom_Inner_Box"></div>
        </div>
      </div>
    );
  }
}

export default App;
