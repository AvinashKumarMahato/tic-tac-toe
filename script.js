// JavaScript code for the Tic-tac-toe game

const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
const cells = Array.from(document.getElementsByClassName('cell'));

// Initialize the game board
function initializeBoard() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}

function handleCellClick(event) {
    const cell = event.target;
    if (cell.innerText === '') {
        cell.innerText = currentPlayer;
        if (checkWin()) {
            setTimeout(() => {
                alert(`Player ${currentPlayer} wins!`);
            }, 100);
        } else if (checkDraw()) {
            setTimeout(() => {
                alert("It's a draw!");
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return cells[combo[0]].innerText !== '' &&
               cells[combo[0]].innerText === cells[combo[1]].innerText &&
               cells[combo[0]].innerText === cells[combo[2]].innerText;
    });
}

function checkDraw() {
    return cells.every(cell => cell.innerText !== '');
}

resetButton.addEventListener('click', initializeBoard);

initializeBoard();
