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

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <div >
            <Header />
            <WordInput />
            <NewGameButton />
          </div>
          <div>
            <HangmanPicture />
          </div>
          <div>
            <WordDisplay />
            <LetterInput />
            <LetterSubmitButton />
          </div>



        </div>
      </div >
    );
  }
}

export default App;
