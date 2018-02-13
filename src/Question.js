import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div>
                <div>
                    <p><u>Category:</u> {this.props.category}</p>
                    <p><u>Question:</u> {this.props.question}</p>
                    <p><u>Value:</u> {this.props.value}</p>
                </div>
                <div>
                    <input type="text" name="answer" id="answer" />
                    <button onClick={this.props.answerHandler} >Send</button>
                </div>

            </div>
        )
    }
}

export default Question;