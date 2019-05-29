import React, { Component } from 'react'
import './RatingFilter.css'

class RatingFilter extends Component {
    
    handleChange = (event) => {
        this.props.ratingFilterFunction(event.target.value)
    }
    
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
                    <input name="iptRating" id="iptRating" defaultValue={this.props.currentRatingFilter} onChange={this.handleChange.bind(this)} />
                   <p>Slider bar rating</p>
               </div>                
            </div>
        </div>
    )
  }
}

export default RatingFilter