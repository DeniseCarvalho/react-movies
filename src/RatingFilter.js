import React, { Component } from 'react'
import './RatingFilter.css'

class RatingFilter extends Component {
  render() {
    return (
        <div class="row">
            <div class="col-2">
               <div>
                   <p></p>
               </div>
                
            </div>      
        
            <div class="col-10">
               <div class="rating">
                   <p>Slider bar rating</p>
               </div>                
            </div>
        </div>
    )
  }
}

export default RatingFilter