//React imports
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//Ant-Design imports
import 'antd/dist/antd.css';
//Custom imports
import './App.css';
import CustomLayout from './containers/Layout.js'
import BaseRouter from './routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>

      </div >
    );
  }
}

export default App;


