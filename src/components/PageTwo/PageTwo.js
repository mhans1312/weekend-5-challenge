import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageTwo extends Component {

    handleInputNumber = (event) => {
        this.setState({
            ...this.state,
            rankNumber: event.target.value,
        });
        console.log('clicked number is: ', event.target.value);
        
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.newFeedback)
        this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state});
        this.props.history.push('/PageThree')
    }

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <form onSubmit={this.handleClick}>
                        <input onChange={this.handleInputNumber} type="radio" value="1"/><label>1</label>
                        <input onChange={this.handleInputNumber} type="radio" value="2"/><label>2</label>
                        <input onChange={this.handleInputNumber} type="radio" value="3"/><label>3</label>
                        <input onChange={this.handleInputNumber} type="radio" value="4"/><label>4</label>
                        <input onChange={this.handleInputNumber} type="radio" value="5"/><label>5</label>
                        <button type="submit">Next</button>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageTwo);