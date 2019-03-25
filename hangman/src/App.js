import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import WordInput from './components/WordInput';
import HangmanPicture from './components/HangmanPicture';
import WordDisplay from './components/WordDisplay';
import LetterInput from './components/LetterInput';
import EndGameMessage from './components/EndGameMessage';

class App extends Component {
  state = {
    word: [],
    wordDisplay: [],
    guessedChars: ['', ' '],
    hangmanState: 0,
  }

  render() {
    const playerWins = this.state.word.every(char => this.state.guessedChars.includes(char.toLowerCase()));
    const playerLoses = this.state.hangmanState >= 10;
    if ((playerWins && this.state.word.length > 0) || playerLoses) {
      return (
        <div className="App">
          <div className='App-header'>
            <div >
              <Header />
              <WordInput wordSubmit={this.wordSubmit}/>
            </div>
            <div>
              <HangmanPicture hangmanState={this.state.hangmanState}/>
            </div>
            <div>
              <EndGameMessage playerWins={playerWins} playerLoses={playerLoses}/>
            </div>
          </div>
        </div >
      )
    } else {
      return (
        <div className="App">
          <div className='App-header'>
            <div >
              <Header />
              <WordInput wordSubmit={this.wordSubmit}/>
            </div>
            <div>
              <HangmanPicture hangmanState={this.state.hangmanState}/>
            </div>
            <div>
              <WordDisplay wordDisplay={this.state.wordDisplay.join(' ')}/>
              <LetterInput letterSubmit={this.letterSubmit} guessedChars={this.state.guessedChars}/>
            </div>
          </div>
        </div >
      )
    }
  }

  wordSubmit = (wordInput) => {
    this.setState({
      word: wordInput.split(''),
      guessedChars: ['', ' '],
      hangmanState: 0,
    })
    this.refreshWordDisplay();
  }

  letterSubmit = (letterInput) => {
    if (!this.state.guessedChars.includes(letterInput)) {
      this.setState(prevState => {
        return {
          guessedChars: [...prevState.guessedChars, letterInput],
          hangmanState: this.state.word.includes(letterInput) || this.state.word.includes(letterInput.toUpperCase()) ?
                          prevState.hangmanState :
                          prevState.hangmanState + 1
        }
      })
      this.refreshWordDisplay();
    }
  }

  refreshWordDisplay = () => {
    this.setState(prevState => {
      return {
        wordDisplay: prevState.word.map(char => {
          if (prevState.guessedChars.includes(char.toLowerCase())) {
            return char;
          } else {
            return '_';
          }
        })
      }
    })
  }
}

export default App;
