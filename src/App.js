import React, { Component } from 'react';
import './App.css';
import Movies from "./Movies"


class App extends Component {

  state = {
    movies: [],
    search: ""
  }

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase()
    const ApiKey = "5259c8949c37b92e4bfb71d3a1948220"
    console.log(value)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${value}`)

      .then(response => response.json())



      .then(data => {
        console.log(data.results)

        this.setState({
          movies: data.results,
          search: value,
        })

      })
  }
  render() {



    return (
      <>
        <div>
          MOVIE BROWSER
        </div>
        <div>
          <label htmlFor="search">Wyszukaj film</label>
          <input onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <h4>
          <Movies results={this.state.movies} />
        </h4>
      </>
    )



  }
}
export default App;
