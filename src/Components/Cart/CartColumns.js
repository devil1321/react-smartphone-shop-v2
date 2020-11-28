import React, { Component } from 'react'
import styled from "styled-components"
export default class CartColumns extends Component {
  render() {
    return (
        <div className="container-fluid p-0 col-12 text-center d-none  d-lg-flex justify-content-around align-items-center text-uppercase">
            <div className="col-2">
                <h6>Products</h6>
            </div>
            <div className="col-2">
                <h6>Name Of Product</h6>
              
            </div>
            <div className="col-2">
                <h6>Price</h6>
             
            </div>
            <div className="col-2">
                <h6>Quantity</h6>
              
            </div>
            <div className="col-2">
                <h6>Remove</h6>
               
            </div>
            <div className="col-2">
                <h6>Total</h6>
            </div>
        </div>
    )
  }
}
