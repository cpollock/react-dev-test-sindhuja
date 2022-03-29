import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "./components/DataGrid/Grid";
import "./App.css";

// all logic has been included though on commented lines, as I am unaware to link from redux in react older version nor to load them.
// still logically they should be all right.

class ReactApp extends Component {
  static title = "App";

  constructor() {
    super();
  }

  componentDidMount() {}

  handleAdd = () => {};

  render() {
    return (
      <div>
        <Grid />
        {/* <button onClick={() => handleAdd()} >Add</button> */}
      </div>
    );
  }
}

export default connect(null, null)(ReactApp);
