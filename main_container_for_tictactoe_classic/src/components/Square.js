import React from 'react';
import './Square.css';

/**
 * PUBLIC_INTERFACE
 * Square component represents a single cell in the TicTacToe grid
 * @param {Object} props - Component props
 * @param {string|null} props.value - The value to display ('X', 'O', or null)
 * @param {Function} props.onClick - Function to call when square is clicked
 * @returns {JSX.Element} A single square button element
 */
const Square = ({ value, onClick }) => {
  return (
    <button 
      className={`square ${value ? 'square-' + value.toLowerCase() : ''}`} 
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default Square;
