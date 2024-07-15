document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');
    let isXNext = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(e) {
        const cell = e.target;
        const index = cell.getAttribute('data-index');

        if (gameState[index] !== '' || checkWin()) {
            return;
        }

        gameState[index] = isXNext ? 'X' : 'O';
        cell.classList.add(isXNext ? 'x' : 'o');
        cell.innerText = isXNext ? 'X' : 'O';
        isXNext = !isXNext;

        if (checkWin()) {
            setTimeout(() => {
                alert(`${gameState[index]} wins!`);
            }, 100);
        } else if (!gameState.includes('')) {
            setTimeout(() => {
                alert('It\'s a tie!');
            }, 100);
        }
    }

    function checkWin() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }

    function resetGame() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        isXNext = true;
        cells.forEach(cell => {
            cell.innerText = '';
            cell.classList.remove('x', 'o');
        });
    }

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    resetButton.addEventListener('click', resetGame);
});
