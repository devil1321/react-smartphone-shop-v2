import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
export default class Error extends Component {
  render() {
    return (
      <ErrorStyle>
        <div className="row d-block text-center">
          <h1>Error 404</h1>
          <h1>Page <span className="text-danger">{this.props.history.location.pathname}</span> Not Found</h1>
          <Link to="/">
              <button className="btn-back">Return To The Shop</button>
          </Link>
        </div>
      </ErrorStyle>
    )
  }
}

const ErrorStyle = styled.div`
   button{
        position:relative;
        padding:3px 18px;
        font-weight:bold;
        border:2px solid transparent;
        color:white;
  }
  .btn-back{
      background-color:#ededed;
      color:black;
      transition:all 1s ease;
      &:hover{
        background-color:red;
        color:white;
      }
    }


`