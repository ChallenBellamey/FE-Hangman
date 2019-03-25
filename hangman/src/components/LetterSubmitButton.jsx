import React from 'react';
const LetterSubmitButton = (props) => {
    return <button className="button-primary" onClick={props.letterSubmit}>Submit letter</button>
}
export default LetterSubmitButton;