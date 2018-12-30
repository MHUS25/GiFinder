
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

class App extends Component {
  constructor() {
        super();

        this.state = {
            gifs: []
        }
    }

  handleQueryChange(query) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query.replace(/\s/g, '+')}&api_key=txUDYZkPAy3Xcj0ocBlnlqjT0RX8nwu3`;

    fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res.data[0]);
          })
  }



  render() {
    return (
      <div className="App">
        <SearchBar onQueryChange={this.handleQueryChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
