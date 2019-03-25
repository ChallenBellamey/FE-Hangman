import React from 'react';

const LetterInput = (props) => {
    return <label>
        <form onSubmit={props.letterSubmit}>
            Letter Input: <input maxLength='1' onChange={props.letterInputChange} value={props.letterInput}></input>
        </form>
    </label>
}

export default LetterInput;