import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { Provider } from 'react-redux';
import { store } from './store';
import AddBoard from './components/AddBoard';

function App() {
  return (
    <Provider store={store}>
      <AddBoard />
      <Board size={10}/>
    </Provider>
  );
}

export default App;
