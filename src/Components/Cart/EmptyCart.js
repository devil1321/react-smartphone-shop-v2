import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
export default class EmptyCart extends Component {
  render() {
    return (
      <EmptyCartStyle>
        <div className="row d-block text-center">
          <h1>Your Cart Is <span className="text-danger">Empty</span></h1>
          <h1>To Continue Shopping Click On The Button</h1>
          <Link to="/">
              <button className="btn-back">Return To The Shop</button>
          </Link>
        </div>
      </EmptyCartStyle>
    )
  }
}

const EmptyCartStyle = styled.div`
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