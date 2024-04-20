import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  
    cells: string[] = Array(9).fill('');
    currentPlayer: string = 'X';
    winner: string | null = null;
  
    makeMove(index: number): void {
      if (!this.cells[index] && !this.winner) {
        this.cells[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    checkWinner(): void {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
          this.winner = this.cells[a];
        }
      }
    }
  
    isBoardFull(): boolean {
      return this.cells.every(cell => cell !== '');
    }
  
    restartGame(): void {
      this.cells = Array(9).fill('');
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
  

