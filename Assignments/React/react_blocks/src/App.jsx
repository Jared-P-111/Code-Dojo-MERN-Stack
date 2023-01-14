import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
