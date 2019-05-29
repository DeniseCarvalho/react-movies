import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import RatingFilter from './RatingFilter.js'
import Gallery from './Gallery.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      config: {},
      movies: [],
      moviesToDisplay: [],
      genres: [],
        currentRatingFilter: 3
    };
  }
        
  fetchMovies() {
    fetch('http://api.themoviedb.org/3/movie/now_playing?api_key={YOUR_API_KEY}')
    .then(res => res.json())
    .then(
      (result) => {
        let withGenreNames = result.results.map( (movie) => {
          movie.genre_names = this.state.genres
            .filter(genre => movie.genre_ids.indexOf(genre.id) >= 0)
            .map(genre => genre.name)
          return movie
        })
        
        let sorted = withGenreNames.sort((a, b) => b.popularity - a.popularity)
        
        this.setState({
          isLoaded: true,
          movies: sorted
        });
        this.filterMinRating(3)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )      
  }

  fetchGenres() {
    fetch("http://api.themoviedb.org/3/genre/movie/list?api_key={YOUR_API_KEY}")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          genres: result.genres
        });
        this.fetchMovies()
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }
  
  fetchData() {
    fetch("http://api.themoviedb.org/3/configuration?api_key={YOUR_API_KEY}")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          config: result
        });
        this.fetchGenres()
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }
    
  filterMinRating = (minRating) => {
    this.setState({
        currentRatingFilter: minRating,
      moviesToDisplay: this.state.movies.filter(movie => movie.vote_average >= minRating)
    });    
  }
  
  componentDidMount() {
    this.fetchData()
  }
    
  render() {
    const { error, isLoaded, moviesToDisplay, config, currentRatingFilter } = this.state;
      
    if (error) {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    } else if (!isLoaded) {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Header />
                <RatingFilter ratingFilterFunction={this.filterMinRating} currentRatingFilter={currentRatingFilter} />
                <Gallery movies={moviesToDisplay} config={config} />
            </React.Fragment>
        )
    }      
  }
}

export default App