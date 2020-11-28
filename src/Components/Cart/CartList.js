import React, { Component } from 'react'
import CartItem from "./CartItem"
export default class CartList extends Component {
  render() {
    return (
      <div className="container-fluid p-0 text-center justify-content-center align-items-center">
        {this.props.data.cart.map(cartProduct =>{
            return <CartItem cart={cartProduct} data={this.props.data}/>
        })}
      </div>
    )
  }
}
