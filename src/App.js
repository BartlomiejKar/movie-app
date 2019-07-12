import React, { Component } from 'react';
import './App.css';
import Movies from "./Movies"
import Trending from "./Trending"


class App extends Component {

  state = {
    movies: [],
    search: "",
    trending: [],

  }

  handleChange = (e) => {

    const value = e.target.value.toLowerCase()
    const ApiKey = "5259c8949c37b92e4bfb71d3a1948220"
    console.log(value)
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&query=${value}`)

      .then(response => response.json())
      .then(data => {
        console.log(data.results)

        this.setState({
          movies: data.results,
          search: value,
        })

      })
  }

  // search = () => {

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5259c8949c37b92e4bfb71d3a1948220`)
      .then(response => response.json())

      .then(data => {
        console.log(data.results)
        this.setState({
          trending: data.results,

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
        <div>
          Najpopularniejsze filmy w tygodniu:
          <h4 >

            <Trending popular={this.state.trending} />


          </h4>
        </div>
      </>
    )



  }
}
export default App;
