import React from 'react';

const LetterInput = (props) => {
    return <input maxLength='1' onChange={props.letterInputChange} value={props.LetterInput}></input>
}
export default LetterInput;