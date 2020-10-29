import React, { Component } from 'react';
import './css/App.css';
import Movies from "./Movies"
import Trending from "./Trending"
import filmy from "./filmy.jpeg"




class App extends Component {

  state = {
    movies: [],
    search: "",
    trending: [],
    ApiKey: "5259c8949c37b92e4bfb71d3a1948220"
  }




  handleChange = (e) => {
    const value = e.target.value.toLowerCase()
    this.setState({
      search: value
    })
    const { ApiKey } = this.state
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&query=${value}`)
      .then(response =>
        response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })

      })



  }





  GetMovies = () => {
    const { ApiKey } = this.state
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}`)
      .then(response => response.json())
      .then(data => {
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
        <header className="header">
          <img className="header__logo" src={filmy} alt="logo" />
          <h1 className="header__title">MOVIE BROWSER</h1>
          <nav className="navigation">
            <a href="#popular" className="navigation__link">Najpopularniejsze filmy tygodnia</a>
          </nav>
        </header>
        <div className="search">
          <label htmlFor="search"><strong>Wyszukaj film</strong></label>
          <input className="search__input" onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <div >
          <h4 >
            <Movies movies={this.state.movies} />
          </h4>
        </div>
        <div >
          <strong>
            Najpopularniejsze filmy w tygodniu:
          </strong>
          <h4 id="popular">
            <Trending popular={this.state.trending} />
          </h4>
        </div>
      </>
    )
  }
}
export default App;
