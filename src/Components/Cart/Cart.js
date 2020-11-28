import React, { Component } from 'react'
import { ProductConsumer } from "../context"
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import CartTotals from "./CartTotals"
import EmptyCart from "./EmptyCart"

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(data)=>{
          const {cart} = data
          if(cart.length > 0){ 
            return(
                <div>
                  <Title name="Your" title="Cart" />
                  <CartColumns />
                  <CartList data={data}/>
                  <CartTotals data={data} />
                </div>
                )
          } else {
            return(
              <EmptyCart />
            )
          }
        }}
      </ProductConsumer>
    )
  }
}
