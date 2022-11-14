import React, { Component } from 'react'
import BirthdayComponent from './components/BirthdayComponent'

export default class App extends Component {
  render() {
    return (
      <div className="max-w-3xl m-auto">
        <div className="flex justify-center items-center h-screen">
          <BirthdayComponent />
        </div>
      </div>
    )
  }
}
