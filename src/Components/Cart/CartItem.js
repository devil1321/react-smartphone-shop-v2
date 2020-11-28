import React, { Component } from 'react'
import styled from "styled-components"
export default class CartItem extends Component {
  render() {
      const {id,img,title,price,count,total} = this.props.cart
      const {decrement,increment,removeItem} = this.props.data
    return (
        <CartItemStyle>
        <div className="product container-fluid p-0 text-center d-block d-md-flex justify-content-around align-items-center">
           <div className="col-md-2 col-10 mx-auto my-2 img">
                <img className="img-fluid w-25" src={process.env.PUBLIC_URL + img} alt=""/>
            </div>
           <div className="col-md-2 col-10 mx-auto my-2 title">
                <h6>{title}</h6>
              
            </div>
            <div className="col-md-2 col-10 mx-auto my-2 price">
                <h6>{price}$</h6>
             
            </div>
            <div className="col-md-2 col-10 mx-auto my-2 d-flex justify-content-center align-items-center buttons">
                <button className="minus mx-2" onClick={()=>{decrement(id)}}>-</button>
                <button className="number mx-2">{count}</button>
                <button className="plus mx-2" onClick={()=>{increment(id)}}>+</button>
              
            </div>
            <div className="col-md-2 col-10 mx-auto my-2 d-flex justify-content-center align-items-center icon">
                <h6><i className="fa fa-trash fa-1x" onClick={()=>{removeItem(id)}}></i></h6>
            </div>
            <div className="col-md-2 col-10 mx-auto my-2 total">
                <h6 className="font-weight-bold">{total}$</h6>
            </div>
        </div>
        </CartItemStyle>
    )
  }
}
const CartItemStyle = styled.div`

button {
  border:0px;
  border-bottom: 1px solid black;
  border-radius: 0px;
  border-color: gray;
  background:transparent;
}
i{
    color:orangered;
    &:hover{
        cursor:pointer;
    }
}
.minus:hover{
    color:red;
}
.number:hover{
    color:black;
}
.plus:hover{
    color:green;
}

`;