import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {ProductConsumer} from "./context" 
export default class Details extends Component {
  render() {
    return (
        <ProductConsumer>
            {(data)=>{
              const {id, img, title, company, price, inCart, info } = data.detailProduct
              const {addToCart} = data
              return(
                <DetailStyle>
                  <div className="row d-block d-md-flex justify-content-center align-items-center">
                    <div className="col-11 mx-auto col-md-5 p-2 text-center text-md-right">
                      <img className="img-fluid" src={process.env.PUBLIC_URL + img}/>
                    </div>
                    <div className="col-11 mx-auto col-md-5 p-2 text-justify text-md-left">
                      <h1>Product nr: {id}</h1>
                      <h3 className="text-muted">Model : {title}</h3>
                      <h3 className="text-danger">Company : {company}</h3>
                      <h3 className="text-muted">Price : {price}</h3>
                      <p className="text-muted">{info}</p>
  
                      <button className={inCart === false ? "btn-cart mx-1" : "btn-green mx-1"} disabled={inCart ? true : false} onClick={()=>{addToCart(id)}}>{inCart ? "In Cart" : "Add To Cart"}</button>
                      <Link to="/">
                        <button className="btn-back">Back To Products</button>
                      </Link>
                    </div>
                  </div>
                </DetailStyle>
              )
            }}
        </ProductConsumer>
    )
  }
}
const DetailStyle = styled.div`
   button{
        position:relative;
        padding:3px 18px;
        font-weight:bold;
        border:2px solid transparent;
        color:white;
  }
  .btn-price{
    background-color:black;
    color:white;
  }
  .btn-cart{
    background-color:orangered;
    transition:all 1s ease;
    &:hover{
      background-color:green;
    }
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
  .btn-green{
    background-color:green;
  }
`