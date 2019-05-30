import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {

  render() {
    return (
        <div className="row">
            <div className="col-12 loading">
                <div className="loader"></div>
            </div>
        </div>
    )
  }
}

export default Loading