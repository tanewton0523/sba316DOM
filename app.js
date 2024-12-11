import { generateSudoku, createPuzzle } from './puzzles/sudoku.js';

// Timer logic
let timer;
function startTimer() {
    const timeElement = document.getElementById('time');
    let seconds = 0;

    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        timeElement.textContent = `${minutes}:${displaySeconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Display puzzle
function displayPuzzle(difficulty) {
    const fullBoard = generateSudoku();
    const puzzle = createPuzzle(fullBoard, difficulty);

    const puzzleGrid = document.getElementById('puzzle-grid');
    puzzleGrid.innerHTML = ''; // Clear previous puzzle

    puzzle.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('input');
            cellElement.type = 'text';
            cellElement.maxLength = 1;
            cellElement.value = cell !== 0 ? cell : '';
            cellElement.disabled = cell !== 0;
            puzzleGrid.appendChild(cellElement);
        });
    });
    startTimer(); // Start timer when the puzzle is displayed
}

// Event Listeners
document.getElementById('sudoku-btn').addEventListener('click', () => displayPuzzle('medium'));
// Future logic puzzle integration
document.getElementById('logic-btn').addEventListener('click', () => alert('Logic Puzzle not implemented yet!'));
