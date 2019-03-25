import React, {Component} from 'react';

// const LetterInput = (props) => {
//     return <label>
//         <form onSubmit={props.letterSubmit}>
//             Letter Input: <input maxLength='1' onChange={props.letterInputChange} value={props.letterInput}></input>
//         </form>
//     </label>
// }

class LetterInput extends Component {
    state = {
        letterInput: ''
    }
    render () {
        return <label>
            <form onSubmit={this.letterSubmit}>
                Letter Input: <input maxLength='1' onChange={this.letterInputChange} value={this.state.letterInput}></input>
            </form>
        </label>
    }
    letterInputChange = (event) => {
        this.setState({
            letterInput: event.target.value
        })
    }
    letterSubmit = (event) => {
        event.preventDefault();
        if (!this.props.guessedChars.includes(this.state.letterInput)) {
            this.props.letterSubmit(this.state.letterInput);
            this.setState({
                letterInput: ''
            })
        }
    }
}

export default LetterInput;