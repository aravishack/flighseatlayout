import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SeatLayoutComponent from "../src/components/SeatLayout/SeatLayoutComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeatLayoutComponent />
      </div>
    );
  }
}

export default App;
