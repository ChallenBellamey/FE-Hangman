import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import WordInput from './components/WordInput';
import NewGameButton from './components/NewGameButton';
import HangmanPicture from './components/HangmanPicture';
import WordDisplay from './components/WordDisplay';
import LetterInput from './components/LetterInput';
import LetterSubmitButton from './components/LetterSubmitButton';
import EndGameMessage from './components/EndGameMessage';

class App extends Component {
  state = {
    wordInput: '',
    word: [],
    wordDisplay: [],
    guessedChars: [' '],
    hangmanState: 0,
    letterInput: ''
  }

  render() {
    const playerWins = this.state.word.every(char => this.state.guessedChars.includes(char.toLowerCase()));
    const playerLoses = this.state.hangmanState >= 10;
    if (playerWins && this.state.word.length > 0 || playerLoses) {
      return (
        <div className="App">
          <div className='App-header'>
            <div >
              <Header />
              <WordInput wordInputChange={this.wordInputChange} wordSubmit={this.startGame} wordInput={this.state.wordInput}/>
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
              <WordInput wordInputChange={this.wordInputChange} wordSubmit={this.startGame} wordInput={this.state.wordInput}/>
            </div>
            <div>
              <HangmanPicture hangmanState={this.state.hangmanState}/>
            </div>
            <div>
              <WordDisplay wordDisplay={this.state.wordDisplay.join(' ')}/>
              <LetterInput letterInputChange={this.letterInputChange} letterSubmit={this.letterSubmit} letterInput={this.state.letterInput}/>
            </div>
          </div>
        </div >
      )
    }
  }

  wordInputChange = (event) => {
    this.setState({
      wordInput: event.target.value
    })
  }

  startGame = (event) => {
    event.preventDefault();
    this.setState({
      wordInput: '',
      word: this.state.wordInput.split(''),
      guessedChars: [' '],
      hangmanState: 0,
      letterInput: ''
    })
    this.refreshWordDisplay();
  }

  letterInputChange = (event) => {
    this.setState({
      letterInput: event.target.value
    })
  }

  letterSubmit = (event) => {
    event.preventDefault();
    const newLetter = this.state.letterInput.toLowerCase();
    if (!this.state.guessedChars.includes(newLetter)) {
      this.setState(prevState => {
        return {
          letterInput: '',
          guessedChars: [...prevState.guessedChars, newLetter],
          hangmanState: this.state.word.includes(newLetter) || this.state.word.includes(newLetter.toUpperCase()) ?
                          prevState.hangmanState :
                          prevState.hangmanState + 1
        }
      })
      this.refreshWordDisplay();
    }
  }

  refreshWordDisplay = () => {
    this.setState(prevState => {
      console.log(prevState.word, prevState.guessedChars)
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
