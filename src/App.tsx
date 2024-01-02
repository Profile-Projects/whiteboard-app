import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Board size={10}/>
    </Provider>
  );
}

export default App;
