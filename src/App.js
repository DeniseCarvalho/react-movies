import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Loading from './Loading.js'
import Gallery from './Gallery.js'

class App extends Component {

  constructor(props) {
    super(props);
    // initialize application state
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
    // fetch all movies from "now_playing" API (only first page)
    if (!this.state.error) {
        fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(
          (result) => {
            // correlate genre ids with previous loaded genres data
            let withGenreNames = result.results.map( (movie) => {
              // enrich each movie with a list of genre names
              movie.genre_names = this.state.genres
                .filter(genre => movie.genre_ids.indexOf(genre.id) >= 0)
                .map(genre => genre.name)
              return movie
            })

            // movies will always be sorted by popularity
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
  }

  fetchGenres() {
    // fetch all genres, required to correlate genre ids to names to better display info to end user
    if (!this.state.error) {
        fetch('http://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.REACT_APP_API_KEY)
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
  }
  
  fetchData() {
    // fetch themoviedb config, required to mount poster URL in Gallery.js
    fetch('http://api.themoviedb.org/3/configuration?api_key=' + process.env.REACT_APP_API_KEY)
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
    if (!this.state.error) {
        // filter movies by min rating and update state to trigger rendering
        this.setState({
            currentRatingFilter: minRating,
          moviesToDisplay: this.state.movies.filter(movie => movie.vote_average >= minRating)
        });        
    }
  }
  
  componentDidMount() {
    // fetch all necessary data from api when mouting
    this.fetchData()
  }
    
  render() {
    const { error, isLoaded, moviesToDisplay, config, currentRatingFilter } = this.state;
      
    if (error) {
        return (
            <React.Fragment>
                <Header ratingFilterFunction={this.filterMinRating} currentRatingFilter={currentRatingFilter} />
            </React.Fragment>
        )
    } else if (!isLoaded) {
        return (
            <React.Fragment>
                <Header ratingFilterFunction={this.filterMinRating} currentRatingFilter={currentRatingFilter} />
                <Loading />
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Header ratingFilterFunction={this.filterMinRating} currentRatingFilter={currentRatingFilter} showFilter={true} />
                <Gallery movies={moviesToDisplay} config={config} />
            </React.Fragment>
        )
    }      
  }
}

export default App