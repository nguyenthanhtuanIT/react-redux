import React, { Component } from "react";
import Sort from "./Sort";
import Search from "./Search";

class Controll extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Search></Search>
        <Sort></Sort>
      </div>
    );
  }
}

export default Controll;
