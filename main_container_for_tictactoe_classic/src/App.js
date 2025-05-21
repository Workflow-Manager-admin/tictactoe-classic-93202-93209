import React from 'react';
import './App.css';
import TicTacToeGame from './components/TicTacToeGame';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <div>TicTacToe Classic</div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-wrapper">
            <TicTacToeGame />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;