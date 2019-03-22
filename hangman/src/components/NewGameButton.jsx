import React from 'react';
const NewGameButton = (props) => {
    return <button className="button-primary" onClick={props.startGame}>Start Game</button>
}
export default NewGameButton;