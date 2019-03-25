import React from 'react';
const WordInput = (props) => {
    return <label >
        <form onSubmit={props.wordSubmit}>
            Word Input: <input onChange={props.wordInputChange} value={props.wordInput}></input>
        </form>
    </label>
}

export default WordInput