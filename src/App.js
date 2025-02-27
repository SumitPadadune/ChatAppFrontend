import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Route path='/' component={HomePage} exact />
        <Route path='/chats' component={ChatPage} />
      </div>
    </div>
  );
}

export default App;
