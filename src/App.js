import React from 'react';
import Todos from './Components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Todos />
        </div>
      </header>
    </div>
  );
}

export default App;
