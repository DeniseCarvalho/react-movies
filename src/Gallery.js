import React, { Component } from 'react'
import sample from './sample.jpg'
import './Gallery.css'

class Gallery extends Component {
  render() {
    return (
        <div class="row">
            <div class="col-12">
               <div class="gallery">
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                    <figure class="gallery__item gallery__item--1"> 
                        <img src={sample} class="gallery__img" alt="Image 1" />
                    </figure> 
                </div>
            </div>
        </div>     
    )
  }
}

export default Gallery