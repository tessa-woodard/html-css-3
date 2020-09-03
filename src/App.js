import React, { Component } from 'react'
import "./components/reset.css"
import "./App.css"
import NavBar from './components/NavBar'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      display: false
    }
    this.handleMobile = this.handleMobile.bind(this)
  }

  handleMobile() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <div className="header">
        <NavBar />
        <div className="container">
          <h1 className='title'>GRAYSCALE</h1>

        </div>
      </div>
    )

  }
}