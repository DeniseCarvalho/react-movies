import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {
  render() {
    
    const {movies, config} = this.props
    
    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
               <div className="gallery">
                    {movies.map(movie =>
                     <div key={movie.id} className="movie">
                        <figure className="movie-poster" key="fig-{movie.id}">
                            <img src={config.images.base_url+'w154'+movie.poster_path} alt="{movie.title} poster" />
                        </figure>
                        <div className="movie-data">
                            <div className="title">
                                <h3>{movie.title}</h3>
                                <h4>Popularity: <span className="data"> {movie.popularity} </span></h4>
                                <h4>Rating: <span className="data"> {movie.vote_average} </span></h4>
                            </div>
                            <div className="genre">
                                <h5> {movie.genre_names.join(" | ")} </h5>
                            </div>
                        </div>
                      </div>
                     )}
                </div>
            </div>
            <div className="col-1"></div>
        </div>     
    )
  }
}

export default Gallery