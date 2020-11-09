import React, { Component } from 'react';
import './css/App.css';
import Movies from "./Movies";
import Modal from "./Modal.js";
import Trending from "./Trending"
import Actors from "./Actors"
import filmy from "./filmy.jpeg"




class App extends Component {

  state = {
    movies: [],
    search: "",
    trending: [],
    ApiKey: "5259c8949c37b92e4bfb71d3a1948220",
    description: "",
    title: "",
    modal: false
  }



  showInformationAboutMovie = (id, description, title) => {
    this.setState({
      description: description,
      title: title,
      modal: true
    })

  }
  closeInformationAboutMovie = () => {
    this.setState({
      modal: false
    })
  }


  handleChange = (e) => {
    const { ApiKey } = this.state
    const value = e.target.value.toLowerCase()
    this.setState({
      search: value
    })
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&query=${value ? value : " "}`)
      const data = await response.json()
      const results = data.results
      this.setState({
        movies: results
      })
    }
    fetchData()
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
    const { ApiKey, modal, description, title } = this.state

    const results = modal ? <Modal description={description} title={title} closeInformationAboutMovie={this.closeInformationAboutMovie} /> : <Movies showInformationAboutMovie={this.showInformationAboutMovie} movies={this.state.movies} />

    return (
      <>
        <nav className="navigation">
          <ul className="navigation_ul">
            <li className="navigation_li"><a href="#search" className="navigation__link">Wyszukaj film</a></li>
            <li className="navigation_li"><a href="#actors" className="navigation__link">Aktorzy</a></li>
            <li className="navigation_li"><a href="#popular" className="navigation__link">Najpopularniejsze filmy tygodnia</a></li>
          </ul>
        </nav>
        <header className="header">
          <img className="header__logo" src={filmy} alt="logo" />
          <h1 className="header__title">Filmowa Baza</h1>
        </header>
        <div className="search">
          <label htmlFor="search"><strong>Wyszukaj film</strong></label>
          <input className="search__input" onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <div >
          {results}
        </div>
        <h4 className='trending_title'>
          Najpopularniejsze filmy w tygodniu:
          </h4>
        <Trending popular={this.state.trending} />
        <div>
          <Actors ApiKey={ApiKey} />
        </div>
      </>
    )
  }
}
export default App;
