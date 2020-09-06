//React & Redux imports
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
//Ant-Design imports
import 'antd/dist/antd.css';
//Custom imports
import './App.css';
import Main from './components/MainComponent';
import { configureStore } from './redux/configureStore'
// import {}


// console.log("********The ConfiguredStore********", configureStore())
// console.log("********The Store********", configureStore().store)
// console.log("********The persistor********", configureStore().persistor)
const store = configureStore().store;
const persistor = configureStore().persistor


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <div className="App">
              <Main />
            </div>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;


