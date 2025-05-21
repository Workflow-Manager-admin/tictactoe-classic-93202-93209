/**
 * Utility functions for TicTacToe game logic
 */

/**
 * PUBLIC_INTERFACE
 * Check if there is a winner based on the current board state
 * @param {Array} squares - The current state of the board (array of 9 elements)
 * @returns {string|null} - The winner ('X' or 'O') or null if no winner yet
 */
export const calculateWinner = (squares) => {
  // Define all possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three squares in a line have the same value (and not null)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
};

/**
 * PUBLIC_INTERFACE
 * Check if the game is a draw (board is full with no winner)
 * @param {Array} squares - The current state of the board
 * @returns {boolean} - True if the game is a draw, false otherwise
 */
export const isDraw = (squares) => {
  // Game is a draw if all squares are filled (not null) and there's no winner
  return squares.every(square => square !== null) && !calculateWinner(squares);
};

/**
 * PUBLIC_INTERFACE
 * Get status message based on current game state
 * @param {string|null} winner - The current winner or null if no winner
 * @param {boolean} isDraw - Whether the game is a draw
 * @param {string} nextPlayer - The next player ('X' or 'O')
 * @returns {string} - The status message to display
 */
export const getStatusMessage = (winner, isDraw, nextPlayer) => {
  if (winner) {
    return `Winner: ${winner}`;
  } else if (isDraw) {
    return "Game ended in a draw!";
  } else {
    return `Next player: ${nextPlayer}`;
  }
};
