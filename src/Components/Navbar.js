import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductConsumer } from "./context"
import logo from "../logo.jpg"
import empty from "../icons/empty-cart.svg"
import full from "../icons/cart-full.svg"
export default class Navbar extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
        <NavbarStyle>
          <ProductConsumer>
            {(data)=>{
              const { count } = data
              return(
                <React.Fragment>
                      <nav className="navbar navbar-expand justify-content-between align-items-center">
                        <Link to="/cart" className="col-2 navbar-brand offset-md-1 d-flex"> 
                          <img className="cart mx-0" src={count === 0 ? empty : full} />
                          <h1 className="text-dark display-4 mr-auto">{count}</h1>
                        </Link>
                        <ul className="navbar-nav align-items-center">
                        <Link to="/" className="text-right">
                            <img className="logo ml-5" src={logo}/>
                        </Link>
                          <li className="nav-item">
                            <Link to="/" className="nav-link font-weight-bold text-dark">Products</Link>
                          </li>
                        </ul>
                      </nav>
                      <hr />
                </React.Fragment>
              )
            }}
          </ProductConsumer>
        </NavbarStyle>
    )
  }
}

const NavbarStyle = styled.div`
  nav{
    position:relative;
    height:80px;
  }
  .navbar-nav{
    position:relative;
    margin-right:150px;
  }
  .nav-link{
   text-decoration:none;
   transition:all .5s ease;
    &:hover{
        color:grey !important;
    } 
  }
  .cart{
    position:relative;
    margin:auto;
    width:50px !important;
    height:50px !important;
  }
  .logo{
    position:relative;
    width:100px;
  }

`
