import React, { Component } from 'react'
import styled from "styled-components"
export default class CartTotals extends Component {
  render() {
      const {cartSubtotal,cartTax,cartTotal,clearCart} = this.props.data
    return (
        <CartTotalStyle>
        <div className="mt-5 ml-auto mr-5 d-block text-right">
            <button className="clear-cart font-weight-bold my-3" onClick={()=>{clearCart()}}>Clear Cart</button>
            <h3 className="font-weight-bold">Subtotal : {cartSubtotal}</h3>
            <h3 className="font-weight-bold">Tax : {cartTax}</h3>
            <h3 className="font-weight-bold">Total : {cartTotal}</h3>
            <button className="paypal font-weight-bold my-3"><i className="mr-2 fa fa-paypal fa-1x"></i>Paypal</button>
        </div>
        </CartTotalStyle>
        
    )
  }
}
const CartTotalStyle = styled.div`
.clear-cart{
    position:relative;
    padding:5px 20px;
    border:0px;
    border-radius:25px;
    background-color:red;
    
}
.paypal{
    position:relative;
    padding:5px 20px;
    border:0px;
    border-radius:25px;
    background-color:orangered;
    i{
        color:blue;
    }
}`