import React, { Component } from 'react';
import './App.css';
import Movies from "./Movies"
import Trending from "./Trending"
import filmy from "./filmy.jpeg"




class App extends Component {

  state = {
    movies: [],
    search: "",
    trending: []
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



  GetMovies = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5259c8949c37b92e4bfb71d3a1948220`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        console.log(data.results[0].id)
        console.log(data.results[1].overview)
        this.setState({
          trending: data.results,
        })
      })
  }
  componentDidMount() {
    this.GetMovies()
  }
  render() {

    return (
      <>
        <div className="header">
          <nav className="navigation">
            <a href="#popular" className="link">Najpopularniejsze filmy tygodnia</a>
          </nav>
          <img className="logo" src={filmy} alt="logo" />
          <h1 className="title">MOVIES BROWSER</h1>
        </div>
        <div className="search">
          <label htmlFor="search"><strong>Wyszukaj film</strong></label>
          <input className="input" onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <div >
          <h4 >
            <Movies results={this.state.movies} />
          </h4>
        </div>
        <div >
          <strong>
            Najpopularniejsze filmy w tygodniu:
          </strong>
          <h4 id="popular">
            <Trending active={this.state.active} handleClick={this.Click} popular={this.state.trending} />
          </h4>
        </div>
      </>
    )
  }
}
export default App;
