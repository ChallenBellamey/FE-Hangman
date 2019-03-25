import React from 'react';

const EndGameMessage = (props) => {
    if (props.playerWins) {
        return <p>You win! Enter a new word to start again!</p>
    } else {
        return <p>You lose! Enter a new word to start again!</p>
    }
}

export default EndGameMessage;