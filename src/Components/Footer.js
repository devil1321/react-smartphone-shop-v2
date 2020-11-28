import React, { Component } from 'react'
import styled from "styled-components"
export default class Footer extends Component {
  render() {
    return (
    <FooterStyle>
      <div className="row">
        <ul className="footer mt-5 text-center d-block d-md-flex justify-content-around align-items-center font-weight-bold">
            <li><a href="">Email : testShop@gmail.com</a></li>
            <li><a href="">Adress : Houston Road 26</a></li>
            <li><a href="">Phone : 3333-1233-313</a></li>
            <li><a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></li>
        </ul>
      </div>
    </FooterStyle>
    )
  }
}
const FooterStyle = styled.div`
.footer{
    position:relative;
    width:100%;
    height:100px;
    padding:0px;
    margin:0px;
    color:white;
    background-color:black;
    li{
        list-style-type:none;
    }
    a{
      text-decoration:none;
        color:white;
        &:hover{
            color:orangered;
        }
    }
}
`
