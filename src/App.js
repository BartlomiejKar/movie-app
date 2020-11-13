import React, { Component } from 'react';
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

import './css/App.css';

import Navigation from './component/Navigation';
import Header from './component/Header';
import SearchComponent from "./component/SearchComponent"
import Results from "./component/Results"
import Trending from "./component/Trending"
import Actors from "./component/Actors"
import Footer from "./component/Footer"






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
    const { ApiKey, modal, description, title, movies } = this.state
    return (
      <>
        <Navigation />
        <Header />
        <SearchComponent change={this.handleChange} />
        <Results modal={modal} description={description} title={title} closeInformationAboutMovie={this.closeInformationAboutMovie} showInformationAboutMovie={this.showInformationAboutMovie} movies={movies} />
        <Trending popular={this.state.trending} />
        <Actors ApiKey={ApiKey} />
        <Footer />
      </>
    )
  }
}
export default App;
