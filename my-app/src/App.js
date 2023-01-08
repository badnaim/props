import "./App.css";
import React, { Component } from "react";
import Greet from "./components/Greet";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <NameList />
        <PersonList />
      </div>
    );
  }
}

export default App;
