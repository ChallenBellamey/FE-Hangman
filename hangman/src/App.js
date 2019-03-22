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
    hangmanState: 0
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
            <LetterInput />
            <LetterSubmitButton />
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
    const letter = event.target.value;
  }
}

export default App;
