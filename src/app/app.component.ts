import { Component, OnInit } from '@angular/core';
import { GAME_CONSTANTS } from './constants';
import { Level } from './interfaces/level.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  totalLives = GAME_CONSTANTS.lives;
  actualLevel: Level;
  startGame = false;
  correctWords = 0;
  actualWord = '';
  showWord = false;
  userWord = '';
  completeLevel = 0;
  lostGame = false;

  private actualLevelNumber: number;

  constructor() {
    this.actualLevelNumber = 0;
    this.actualLevel = GAME_CONSTANTS.levels[this.actualLevelNumber];
  }

  initGame() {
    this.startGame = true;
    this.lostGame = false;
    this.selectWord();
  }

  selectWord() {
    const lenghtLevel = this.actualLevel.words.length;
    const ramdomWord = Math.floor(Math.random() * lenghtLevel);
    this.actualWord = this.actualLevel.words[ramdomWord];
    this.showWord = true;
    this.userWord = '';

    setTimeout(() => {
      this.showWord = false;
    }, this.actualLevel.time);
  }

  stopGame() {
    this.lostGame = false;
    this.startGame = false;
    this.actualLevelNumber = 0;
    this.actualLevel = GAME_CONSTANTS.levels[this.actualLevelNumber];
    this.correctWords = 0;
    this.totalLives = GAME_CONSTANTS.lives;
  }

  checkWord() {
    if (this.userWord.toLowerCase() === this.actualWord.toLowerCase()) {
      this.correctWords++;
      this.completeLevel++;

      if (this.completeLevel == 2) {
        this.nextLevel();
      }
      this.selectWord();
    } else {
      this.totalLives--;
      if (this.totalLives === 0) {
        this.lostGame = true;
      } else {
        this.previuosLevel();
        this.selectWord();
      }
    }
  }

  nextLevel() {
    this.completeLevel = 0;
    if (this.actualLevelNumber < 2) {
      this.actualLevelNumber++;
      this.actualLevel = GAME_CONSTANTS.levels[this.actualLevelNumber];
    }
  }

  previuosLevel() {
    this.completeLevel = 0;
    if (this.actualLevelNumber > 0) {
      this.actualLevelNumber--;
      this.actualLevel = GAME_CONSTANTS.levels[this.actualLevelNumber];
    }
  }
}
