import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import RatingFilter from './RatingFilter.js'
import Gallery from './Gallery.js'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Header />
            <RatingFilter />
            <Gallery />
        </React.Fragment>
    )
  }
}

export default App