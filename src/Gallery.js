import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {
  render() {
    
    const {movies, config} = this.props
      
    return (
        <div class="row">
            <div class="col-12">
               <div class="gallery">
                    {movies.map(movie =>
                     <div key={movie.id} className="movie">
                        <figure class="movie-poster" key="fig-{movie.id}">
                            <img src={config.images.base_url+'w154'+movie.poster_path} alt="{movie.title} poster" />
                        </figure>
                        <div className="movie-data">
                            <h3>{movie.title}</h3>
                            <br/><br/>
                            <h4>Popularity: {movie.popularity}</h4>
                            <h4>Rating: {movie.vote_average}</h4>
                            <h4>Genres: {movie.genre_names.join(" :: ")}</h4>
                        </div>
                      </div>
                     )}
                </div>
            </div>
        </div>     
    )
  }
}

export default Gallery