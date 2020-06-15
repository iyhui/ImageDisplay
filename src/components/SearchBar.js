import React from 'react';


class SearchBar extends React.Component{
    state = { term: ''};

    onFormSubmit = event => {

        event.preventDefault(); //stop from refreshing.
        this.props.onSubmit(this.state.term);
        //prints whatever you entered
        // console.log(this.state.term);
    };

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label> <br />
                        <input type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})}
                         />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;