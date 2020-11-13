import React, { Component } from 'react';
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

import './css/App.css';
import Navigation from './component/Navigation';
import Movies from "./component/Movies";
import Modal from "./component/Modal.js";
import Trending from "./component/Trending"
import Actors from "./component/Actors"
import filmy from "./img/filmy.jpeg"





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


  // ErrorPage = () => <h1>Strona nie istnieje</h1>


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
        <Navigation />
        <header className="header">
          <img className="header__logo" src={filmy} alt="logo" />
        </header>
        <div className="search">
          <label htmlFor="search"><strong>Wyszukaj film</strong></label>
          <input className="search__input" onChange={this.handleChange} type="text" placeholder="Wpisz tytuł filmu" id="search" value={this.state.search}></input>
        </div>
        <div >
          {results}
        </div>
        {/* <section>
            
              <Route path="/" exact component={results} />
              <Route path="/popular" component={Trending} />
              <Route path="/actors" component={Actors} />
              <Route component={this.ErrorPage} />
            
          </section> */}
        {/* <h4 className='trending_title'>
            Najpopularniejsze filmy w tygodniu:
          </h4>
          <Trending popular={this.state.trending} />
          <div>
            <Actors ApiKey={ApiKey} />
          </div> */}
      </>
    )
  }
}
export default App;
