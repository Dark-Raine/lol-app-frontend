import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store'
import ProfileDisplay from './components/display/profileDisplay'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Profile Searcher</h1>
        <ProfileDisplay />
      </div>
    </Provider>
  );
}

export default App;
