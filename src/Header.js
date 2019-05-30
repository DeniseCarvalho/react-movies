import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

    handleChange = (event) => {
        this.props.ratingFilterFunction(event.target.value/2)
    }
    
  render() {
      
      if (this.props.showFilter) {
        return (
        <header>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4 header">
                    <p>Movies</p>
                </div>
                <div className="col-6 rating">
                    <p>Current rating: {this.props.currentRatingFilter}</p>
                    <input className="slider" type="range" name="ratingRange" id="ratingRange" min="0" max="20" defaultValue={this.props.currentRatingFilter*2} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="col-1"></div>
            </div>
        </header>
        )          
      } else {
        return (
        <header>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4 header">
                    <p>Movies</p>
                </div>
                <div className="col-6 rating">
                </div>
                <div className="col-1"></div>
            </div>
        </header>
        )          
      }
  }
}

export default Header