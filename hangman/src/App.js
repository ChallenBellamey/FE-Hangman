import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import WordInput from './components/WordInput';
import NewGameButton from './components/NewGameButton';
import HangmanPicture from './components/HangmanPicture';
import WordDisplay from './components/WordDisplay';
import LetterInput from './components/LetterInput';
import LetterSubmitButton from './components/LetterSubmitButton';

class App extends Component {
  state = {
    wordInput: '',
    word: [],
    wordDisplay: [],
    guessedChars: [],
    hangmanState: 0,
    letterInput: ''
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <div >
            <Header />
            <WordInput wordInputChange={this.wordInputChange} wordInput={this.state.wordInput}/>
            <NewGameButton startGame={this.startGame}/>
          </div>
          <div>
            <HangmanPicture hangmanState={this.state.hangmanState}/>
          </div>
          <div>
            <WordDisplay wordDisplay={this.state.wordDisplay.join(' ')}/>
            <LetterInput letterInputChange={this.letterInputChange} letterInput={this.state.letterInput}/>
            <LetterSubmitButton letterSubmit={this.letterSubmit}/>
          </div>
        </div>
      </div >
    );
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
      wordDisplay: '_'.repeat(this.state.wordInput.length).split('')
    })
  }

  letterInputChange = (event) => {
    this.setState({
      letterInput: event.target.value
    })
  }

  letterSubmit = (event) => {
    event.preventDefault();
    const newLetter = this.state.letterInput;
    if (this.state.word.includes(newLetter)) {
      // change word display to reveal new letters
      this.setState(prevState => {
        return {
          guessedChars: [...prevState.guessedChars, newLetter]
        }
      })
      this.refreshDisplay();
    } else {
      // add stage to hangman
    }
  }

  refreshDisplay = () => {
    this.setState(prevState => {
      return {
        wordDisplay: prevState.word.map(char => {
          if (prevState.guessedChars.includes(char)) {
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
