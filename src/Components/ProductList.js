import React, { Component } from 'react'
import { ProductConsumer } from "./context"
import Product from "./Product"
import Title from "./Title"
export default class ProductList extends Component {
  render() {
    return (
        <ProductConsumer>
        {(data)=>{
            const { products } = data
            return(
                <div className="container">
                <Title name="Our" title="Products"/>
                    <div className="row justify-content-center">
                        {products.map(product =>{
                            return <Product key={product.id} product={product} /> 
                        })}
                    </div>
                </div>
            )
        }}
      </ProductConsumer>
    )
  }
}
