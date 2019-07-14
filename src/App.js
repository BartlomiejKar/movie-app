import React, { Component } from 'react';
import './App.css';
import Movies from "./Movies"
import Trending from "./Trending"
import filmy from "./filmy.jpeg"



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
        <div class="header">
          <nav class="navigation">
            <a href="#popular" class="link">Najpopularniejsze filmy tygodnia</a>
          </nav>
          <img class="logo" src={filmy} alt="logo" />
          <h1 class="title">MOVIES BROWSER</h1>
        </div>
        <div class="search">
          <label htmlFor="search">Wyszukaj film</label>
          <input onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <div >
          <h4 >
            <Movies results={this.state.movies} />
          </h4>
        </div>
        <div >
          Najpopularniejsze filmy w tygodniu:
          <h4 id="popular">

            <Trending popular={this.state.trending} />


          </h4>
        </div>
      </>
    )



  }
}
export default App;
