import React, { Component } from 'react';
import './App.css';
import Movies from "./Movies"


class App extends Component {

  state = {
    movies: [],
    search: ""
  }

  handleChange = (e) => {
    const value = e.target.value
    const ApiKey = "5259c8949c37b92e4bfb71d3a1948220"
    console.log(value)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)

        this.setState({
          movies: data.results
        })
      })
  }

  render() {
    const movies = this.state.movies


    return (
      <>
        <div>
          MOVIE BROWSER
        </div>
        <div>
          <label htmlFor="search">Wyszukaj film</label>
          <input onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search"></input>
        </div>
        <h4>
          <Movies results={movies} />
        </h4>
      </>
    )



  }
}
export default App;
