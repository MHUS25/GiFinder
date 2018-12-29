
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';


class App extends Component {
  constructor() {
        super();

        this.state = {
            gifs: [
                {
                    id: 1,
                    url: 'https://media.giphy.com/media/59R6pXgFbvdny/giphy.gif'
                },
                {
                    id: 2,
                    url: 'https://media.giphy.com/media/xUA7beaG2jNv74K9ry/giphy.gif'
                },
                {
                    id: 3,
                    url: 'https://media.giphy.com/media/3o7qDFZCe1ZUfHRLvq/giphy.gif'
                }
            ]
        }
    }

  handleQueryChange(query) {
    console.log(query);
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
