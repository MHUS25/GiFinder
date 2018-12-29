
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  handleQueryChange(query) {
    console.log(query);
  }

  render() {
    return (
      <div className="App">
        <SearchBar onQueryChange={this.handleQueryChange} />
      </div>
    );
  }
}

export default App;
