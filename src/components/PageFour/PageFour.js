import React, {Component} from 'react';

class PageFour extends Component {

    handleClick = () => {
        this.props.history.push('PageFive')
    }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                    <form>
                        <textarea name="comment" form="usrform" placeholder="Enter comments here..."></textarea>
                    </form>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default PageFour;