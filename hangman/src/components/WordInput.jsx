import React, {Component} from 'react';

// const WordInput = (props) => {
//     return <label >
//         <form onSubmit={props.wordSubmit}>
//             Word Input: <input onChange={props.wordInputChange} value={props.wordInput}></input>
//         </form>
//     </label>
// }

class WordInput extends Component {
    state = {
        wordInput: ''
    }
    render () {
        return <label >
            <form onSubmit={this.wordSubmit}>
                Word Input: <input onChange={this.wordInputChange} value={this.state.wordInput}></input>
            </form>
        </label>
    }
    wordInputChange = (event) => {
        this.setState({
            wordInput: event.target.value
        })
    }
    wordSubmit = (event) => {
        event.preventDefault();
        this.props.wordSubmit(this.state.wordInput);
        this.setState({
            wordInput: ''
        })
    }
}

export default WordInput