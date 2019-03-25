import React from 'react';

const WordDisplay = (props) => {
    return <div className='box'>
        <pre>{props.wordDisplay}</pre>
    </div>
}

export default WordDisplay;