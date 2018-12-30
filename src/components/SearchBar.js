import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { query: '' }
    }

    onInputChange(query) {
        this.setState({query});
        this.props.onQueryChange(query);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Search for GIFs" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
