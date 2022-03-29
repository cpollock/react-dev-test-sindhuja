import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "./components/DataGrid/Grid";
import "./App.css";

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
        {/* <>feed grid the gridState from redux</> */}
        <Grid />
        {/* <button onClick={() => handleAdd()} >Add</button> */}
      </div>
    );
  }
}

export default connect(null, null)(ReactApp);
