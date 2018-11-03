import React, {Component} from 'react';

class PageTwo extends Component {

    handleClick = () => {
        this.props.history.push('/PageThree')
    }

    render() {
        return(
            <div>
                <h1>Page Two</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default PageTwo;