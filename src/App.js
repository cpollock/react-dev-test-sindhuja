import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


class ReactApp extends Component {
  static title = 'App';

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        REACT
      </div>
    );
  }
}

export default connect(null, null)(ReactApp);
