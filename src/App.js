import React, { Component } from 'react';
import './App.css';

import Aux from './hoc/auxiliary.js';
import Layout from './components/layout/layout.js';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout/>
      </Aux>
    );
  }
}

export default App;
