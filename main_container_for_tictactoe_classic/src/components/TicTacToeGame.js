import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, isDraw, getStatusMessage } from '../utils/gameUtils';
import './TicTacToeGame.css';

/**
 * PUBLIC_INTERFACE
 * TicTacToeGame component manages the game state and renders the board
 * @returns {JSX.Element} The complete TicTacToe game UI
 */
const TicTacToeGame = () => {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // X goes first
  
  // Determine current game status
  const winner = calculateWinner(board);
  const gameIsDraw = isDraw(board);
  const gameOver = winner || gameIsDraw;
  const currentPlayer = xIsNext ? 'X' : 'O';
  
  /**
   * Handle a player making a move by clicking on a square
   * @param {number} index - The index of the clicked square (0-8)
   */
  const handleClick = (index) => {
    // If square is already filled or game is over, do nothing
    if (board[index] || gameOver) {
      return;
    }
    
    // Create a copy of the board
    const newBoard = [...board];
    // Fill the clicked square with the current player's symbol
    newBoard[index] = currentPlayer;
    
    // Update the state
    setBoard(newBoard);
    setXIsNext(!xIsNext); // Toggle player turn
  };
  
  /**
   * Reset the game to its initial state
   */
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  
  // Determine status message
  const status = getStatusMessage(winner, gameIsDraw, currentPlayer);
  
  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      
      <div className="game-status">{status}</div>
      
      <Board 
        squares={board} 
        onClick={handleClick} 
      />
      
      {gameOver && (
        <button 
          className="btn btn-large reset-button" 
          onClick={handleReset}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default TicTacToeGame;
