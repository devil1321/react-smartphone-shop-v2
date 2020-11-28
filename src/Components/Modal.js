import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {ProductConsumer} from "./context" 

export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(data)=>{
              const {id, img, title, company, price, inCart } = data.modalProduct
              const {addToCart,closeModal, modalOpen} = data
              return(
                <ModalStyle>
                <div className={modalOpen === true ? "modal-container d-flex justify-content-center align-items-center" : "d-none"}>
                  <div className="modal col-10 col-md-4 mx-auto bg-light p-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="mx-auto p-2 text-center text-md-right">
                      <img className="img-fluid mx-auto" src={process.env.PUBLIC_URL + img}/>
                    </div>
                    <div className="mx-auto mt p-2 text-justify text-center">
                      <h3>Model : {title}</h3>
                      <h3 className="text-danger">Company : {company}</h3>
                      <h3 className="text-muted font-weight-bold">Price : {price}</h3>
                      <div className="buttons-container d-flex justify-content-center align-items-center">
                      <button className={inCart === false ? "btn-cart mx-1" : "btn-green mx-1"} disabled={inCart ? true : false} onClick={()=>{addToCart(id)}}>{inCart ? "In Cart" : "Add To Cart"}</button>
                      <Link to="/">
                        <button className="btn-back" onClick={()=>{closeModal(id)}}>Back To Products</button>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
                </ModalStyle>
              )
            }}
        </ProductConsumer>
    )
  }
}
const ModalStyle = styled.div`
.modal-container{
    position:fixed;
    z-index:10;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6)
}
.modal{
    position:relative;
    z-index:10;
    overflow:visible;
    height:90%;
    border-radius:10px;
}
   button{
        position:relative;
        padding:3px 18px;
        font-weight:bold;
        border:2px solid transparent;
        color:white;
        font-size:14px !important;
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