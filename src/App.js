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
    const { ApiKey } = this.state
    // console.log(value)
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&query=${value}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.results)
        this.setState({
          movies: data.results,
          search: value,
        })

      })
  }



  GetMovies = () => {
    const { ApiKey } = this.state
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.results)
        // console.log(data.results[0].id)
        // console.log(data.results[1].overview)
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
            <a href="#popular" className="navigiation__link">Najpopularniejsze filmy tygodnia</a>
          </nav>
          <img className="header__logo" src={filmy} alt="logo" />
          <h1 className="header__title">MOVIES BROWSER</h1>
        </div>
        <div className="search">
          <label htmlFor="search"><strong>Wyszukaj film</strong></label>
          <input className="search__input" onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
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
            <Trending handleClick={this.Click} popular={this.state.trending} />
          </h4>
        </div>
      </>
    )
  }
}
export default App;
