const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});
class Game2048 {
constructor() {
    this.board = [];
    this.score = 0;
    this.best = localStorage.getItem('best2048') || 0;
    this.size = 4;
    this.won = false;
    this.over = false;
    this.moved = false;
                
    this.init();
    this.bindEvents();
    this.updateDisplay();
    }
    init() {
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
        this.addRandomTile();
        this.addRandomTile();
        this.updateDisplay();
    }
    bindEvents() {
        document.addEventListener('keydown', (e) => {
        if (this.over && !this.won) return;

        switch(e.key) {
        case 'ArrowUp':
        e.preventDefault();
        this.move('up');
        break;
        case 'ArrowDown':
        e.preventDefault();
        this.move('down');
        break;
        case 'ArrowLeft':
        e.preventDefault();
        this.move('left');
        break;
        case 'ArrowRight':
        e.preventDefault();
        this.move('right');
        break;
        }
        });
    }

    addRandomTile(){
        const emptyCells = [];
        for (let r = 0; r < this.size; r++) {
        for (let c = 0; c < this.size; c++) {
        if (this.board[r][c] === 0) {
            emptyCells.push({r, c});
        }
        }
        }
        if (emptyCells.length > 0)
            {
                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                this.board[randomCell.r][randomCell.c] = Math.random() < 0.9 ? 2 : 4;
            }
        }

        move(direction) {
                const previousBoard = this.board.map(row => [...row]);
                this.moved = false;

                switch(direction) {
                    case 'left':
                        this.moveLeft();
                        break;
                    case 'right':
                        this.moveRight();
                        break;
                    case 'up':
                        this.moveUp();
                        break;
                    case 'down':
                        this.moveDown();
                        break;
                }
                if (this.moved) {
                    this.addRandomTile();
                    this.updateDisplay();
                    
                    if (this.checkWin()) {
                        this.showGameEnd(true);
                    } else if (this.checkGameOver()) {
                        this.over = true;
                        this.showGameEnd(false);
                    }
                }
            }
    
    moveLeft() {
                for (let r = 0; r < this.size; r++) {
                    const row = this.board[r].filter(val => val !== 0);
                    for (let c = 0; c < row.length - 1; c++) {
                        if (row[c] === row[c + 1]) {
                            row[c] *= 2;
                            row[c + 1] = 0;
                            this.score += row[c];
                        }
                    }
                    const newRow = row.filter(val => val !== 0);
                    while (newRow.length < this.size) {
                        newRow.push(0);
                    }
                    
                    if (JSON.stringify(this.board[r]) !== JSON.stringify(newRow)) {
                        this.moved = true;
                    }
                    this.board[r] = newRow;
                }
            }

            moveRight() {
                for (let r = 0; r < this.size; r++) {
                    const row = this.board[r].filter(val => val !== 0);
                    for (let c = row.length - 1; c > 0; c--) {
                        if (row[c] === row[c - 1]) {
                            row[c] *= 2;
                            row[c - 1] = 0;
                            this.score += row[c];
                        }
                    }
                    const newRow = row.filter(val => val !== 0);
                    while (newRow.length < this.size) {
                        newRow.unshift(0);
                    }
                    
                    if (JSON.stringify(this.board[r]) !== JSON.stringify(newRow)) {
                        this.moved = true;
                    }
                    this.board[r] = newRow;
                }
            }

            moveUp() {
                for (let c = 0; c < this.size; c++) {
                    const column = [];
                    for (let r = 0; r < this.size; r++) {
                        if (this.board[r][c] !== 0) {
                            column.push(this.board[r][c]);
                        }
                    }
                    
                    for (let r = 0; r < column.length - 1; r++) {
                        if (column[r] === column[r + 1]) {
                            column[r] *= 2;
                            column[r + 1] = 0;
                            this.score += column[r];
                        }
                    }
                    
                    const newColumn = column.filter(val => val !== 0);
                    while (newColumn.length < this.size) {
                        newColumn.push(0);
                    }
                    
                    for (let r = 0; r < this.size; r++) {
                        if (this.board[r][c] !== newColumn[r]) {
                            this.moved = true;
                        }
                        this.board[r][c] = newColumn[r];
                    }
                }
            }

            moveDown() {
                for (let c = 0; c < this.size; c++) {
                    const column = [];
                    for (let r = 0; r < this.size; r++) {
                        if (this.board[r][c] !== 0) {
                            column.push(this.board[r][c]);
                        }
                    }
                    
                    for (let r = column.length - 1; r > 0; r--) {
                        if (column[r] === column[r - 1]) {
                            column[r] *= 2;
                            column[r - 1] = 0;
                            this.score += column[r];
                        }
                    }
                    
                    const newColumn = column.filter(val => val !== 0);
                    while (newColumn.length < this.size) {
                        newColumn.unshift(0);
                    }
                    
                    for (let r = 0; r < this.size; r++) {
                        if (this.board[r][c] !== newColumn[r]) {
                            this.moved = true;
                        }
                        this.board[r][c] = newColumn[r];
                    }
                }
            }
        updateDisplay() {
                document.getElementById('score').textContent = this.score;
                
                if (this.score > this.best) {
                    this.best = this.score;
                    localStorage.setItem('best2048', this.best);
                }
                document.getElementById('best-score').textContent = this.best;

                const container = document.getElementById('tile-container');
                container.innerHTML = '';

                // Add tiles
                for (let r = 0; r < this.size; r++) {
                    for (let c = 0; c < this.size; c++) {
                        if (this.board[r][c] !== 0) {
                            const tile = document.createElement('div');
                            tile.className = `tile tile-${this.board[r][c]}`;
                            tile.textContent = this.board[r][c];
                            tile.style.left = `${c * 19 +10}vh`;
                            tile.style.top = `${r * 19 +10}vh`;
                            
                            if (this.moved) {
                                tile.classList.add('tile-new');
                            }
                            
                            container.appendChild(tile);
                        }
                    }
                }

                // Hide game over screen
                document.getElementById('game-over').classList.remove('active');
            }
            checkWin() {
                if (this.won) return false;
                
                for (let r = 0; r < this.size; r++) {
                    for (let c = 0; c < this.size; c++) {
                        if (this.board[r][c] === 2048) {
                            this.won = true;
                            return true;
                        }
                    }
                }
                return false;
            }

            checkGameOver() {
                // Check for empty cells
                for (let r = 0; r < this.size; r++) {
                    for (let c = 0; c < this.size; c++) {
                        if (this.board[r][c] === 0) return false;
                    }
                }

                // Check for possible merges if there is a possible merge then game isnt over
                for (let r = 0; r < this.size; r++) {
                    for (let c = 0; c < this.size; c++) {
                        const current = this.board[r][c];
                        if (
                            (r > 0 && this.board[r-1][c] === current) ||
                            (r < this.size-1 && this.board[r+1][c] === current) ||
                            (c > 0 && this.board[r][c-1] === current) ||
                            (c < this.size-1 && this.board[r][c+1] === current)
                        ) {
                            return false;
                        }
                    }
                }
                return true;
            }

            showGameEnd(won) {
                const gameOver = document.getElementById('game-over');
                const message = document.getElementById('game-message');
                
                if (won) {
                    message.textContent = 'You Win!';
                    gameOver.classList.add('game-won');
                } else {
                    message.textContent = 'Game Over!';
                    gameOver.classList.remove('game-won');
                }
                
                gameOver.classList.add('active');
            }
}
const game = new Game2048();