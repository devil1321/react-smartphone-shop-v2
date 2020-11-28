import React, { Component } from 'react'
export default class Title extends Component {
  render() {
    return (
      <div className="row col-12 my-3 mx-auto text-center">
        <h1 className="text-center mx-auto">{this.props.name} <span className="text-danger">{this.props.title}</span></h1>
      </div>
    )
  }
}
