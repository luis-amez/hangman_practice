class HangmanGame {
  constructor() {
    this.secretWords = ['apple', 'banana', 'cloud', 'devil', 'elephant'];
    this.secretWord = '';
    this.playerWord = '';
    this.attemptsRemaining = 7;
    this.hits = [];
    this.failures = [];
  }

  start () {
    this.secretWord = this.selectRandomWord();
    this.playerWord = this.initializePlayerWord();
    this.attemptsRemaining = 7;
    this.hits = [];
    this.failures = [];
    this.status();
  }

  selectRandomWord() {
    const index = Math.floor(Math.random() * this.secretWords.length);
    const randomWord = this.secretWords[index];
    return randomWord;
  }

  initializePlayerWord() {
    let playerWordPlaceHolder = '';
    for(let i = 0; i < this.secretWord.length; i++) {
      playerWordPlaceHolder += '_ ';
    }
    return playerWordPlaceHolder;
  }

  status() {
    console.log(this.playerWord);
    console.log(`You have ${this.attemptsRemaining} attempts left!`);
    this.printHangman();
  }

  guessLetter(letter) {
    if(this.secretWord.indexOf(letter) !== -1) {
      this.hits.push(letter);
      this.updatePlayerWord();
    } else {
      this.failures.push(letter);
      this.attemptsRemaining--;
    }
    this.status();
  }

  updatePlayerWord() {
    let playerWordPlaceHolder = '';
    for(let i = 0; i < this.secretWord.length; i++) {
      let letter = this.secretWord[i];
      if(this.hits.indexOf(letter) !== -1) {
        playerWordPlaceHolder += `${letter} `;
      } else {
        playerWordPlaceHolder += '_ ';
      }
    }
    this.playerWord = playerWordPlaceHolder;
  }

  printHangman() {
    switch(this.attemptsRemaining) {
      case 7:
        console.log(`
          \n
          \n
          \n
          \n
          \n
          \n
          |_____
        `)
        break;
      case 6:
        console.log(`
          _
          |
          |
          |
          |
          |
          |_____
        `)
        break;
      case 5:
        console.log(`
          ______
          |
          |
          |
          |
          |
          |_____
        `)
        break;
      case 4:
        console.log(`
          ______
          |   |
          |
          |
          |
          |
          |_____
        `)
        break;
      case 3:
        console.log(`
          ______
          |   |
          |  (_)
          |
          |
          |
          |_____
        `)
        break;
      case 2:
        console.log(`
          ______
          |   |
          |  (_)
          |  / \\
          |
          |
          |_____
        `)
        break;
      case 1:
        console.log(`
          ______
          |   |
          |  (_)
          |  / \\
          |   |
          |
          |_____
        `)
        break;
      default:
        console.log(`
          ______
          |   |
          |  (_)
          |  / \\
          |   |
          |  / \\
          |_____
        `)
    }
  }
}