import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ProductConsumer} from "./context"
import cart_added from "../icons/cart-added.svg"
import btn_cart_add from "../icons/add-to-cart.svg"

export default class Product extends Component {
  render() {
      return(

          <ProductConsumer>
            {(data)=>{
                const {id, img, title, company, price,inCart } = this.props.product
                const { handleDetail, addToCart, openModal } = data
                return (
                    <ProductStyle>
                        <React.Fragment>
                        <div className="product-container" onClick={()=>{handleDetail(id)}}>
                        <div className="overlay"></div>
                                <div className="card my-4 mx-3">
                                  {inCart ? <img className="btn-cart" src={cart_added} />: <img className="btn-cart" src={btn_cart_add} alt="" onClick={()=>{addToCart(id)}}/>}
                                    <div className="card-img-top img-container">
                                        <Link to="/details">
                                            <img className="phone-img img-fluid w-75" src={process.env.PUBLIC_URL + img} />
                                        </Link>
                                    </div>
                                  <div className="card-body">
                                      <h5 className="font-weight-bold">{title}</h5>
                                      <h6 className="font-weight-bold">{company}</h6>
                                      <div className="buttons d-flex justify-content-around">
                                          <button className="btn-company" onClick={()=>{openModal(id)}}>{company}</button>
                                          <button className="btn-price">{price}$</button>
                                      </div>
                                  </div>
                                  </div>
                        </div>
                      
                            
                            </React.Fragment>
                      </ProductStyle>
                    )
                }}
            </ProductConsumer>
    )
  }
}

const ProductStyle = styled.div`
h6{
    color:grey;
}
.product-container{
    position:relative;
.overlay{
    position:absolute;
    top:-5px;
    z-index:0;
    left:10px;
    width:230px;
    height:330px;
    border:2px solid orangered;
    opacity:1;
    transition:all 1s ease;
    background:transparent;
}
.card{
    overflow:hidden;
    position:relative;
    width:230px;
    border:2px solid orangered;
    border-radius:0px;
    .btn-cart{
        position:absolute;
        z-index:4;
        width:30%;
        right:0px;
        top:40%;
        padding:5px 10px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        background-color:rgba(0,0,0,0.5);
        transition:all .5s ease;
        transform:translateX(100%);
    }
    .img-container{
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width:230px !important;
        height:190px !important;
        .phone-img{
            margin-left:10%;
        }
      
    }
    .card-body{
        position:relative;
        width:230px;
        height:140px;
    }
    button{
        position:relative;
        padding:3px 18px;
        font-weight:bold;
        border:2px solid transparent;
      
        }
    .btn-company{
        background-color:black;
        color:white;
        transition:all 1s ease;
        &:hover{
        background-color:orangered;
    }
    }
    .btn-price{
        background-color:orangered;
        color:whitesmoke;
    }
}
&:hover{
        cursor:pointer;
    .overlay{
        transform:translateY(15px);
        margin-left:15px;
        opacity:1;
    }
    .btn-cart{
        transform:translateX(0%);
    }
}
}


`