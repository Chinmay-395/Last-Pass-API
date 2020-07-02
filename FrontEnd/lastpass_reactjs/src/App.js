//React & Redux imports
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//Ant-Design imports
import 'antd/dist/antd.css';
//Custom imports
import './App.css';
import Main from './components/MainComponent';
import { configureStore } from './redux/configureStore'

const store = configureStore();

// *|*|*|*|*|*|*|*|*|*|* Commented imports *|*|*|*|*|*|*|*|*|*|* //
// import { connect } from 'react-redux'
// import CustomLayout from './containers/Layout.js'
// import BaseRouter from './routes.js';
// const store = configureStore();
// *|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|* //


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;


