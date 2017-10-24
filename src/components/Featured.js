import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

class Featured extends Component {
  render() {
    return (
      <div id="main"> 
      
        <div id="content" className="main animated fadein">
          
          <div className="hero-header bg-shop animated fadeindown">
            <h1 className="hero-title">Shop</h1>
          </div>

          <div className="animated fadeinup delay-1">
            <div className="shop-banner animated fadeinup delay-1">
              <a href="category.html">
                <img src="img/banner1.jpg" alt="" />
                <div className="opacity-overlay valign-wrapper">
                  <div className="valign center width-100">
                    <h3 className="white-text">New Arrivals</h3>
                    <p className="white-text">SS 2016</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="shop-banner animated fadeinup delay-2">
              <a href="category.html">
                <img src="img/banner2.jpg" alt="" />
                <div className="opacity-overlay valign-wrapper">
                  <div className="valign center width-100">
                    <h3 className="white-text">Accessories</h3>
                    <p className="white-text">Watches 2016</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="shop-banner animated fadeinup delay-3">
              <a href="category.html">
                <img src="img/banner3.jpg" alt="" />
                <div className="opacity-overlay valign-wrapper">
                  <div className="valign center width-100">
                    <h3 className="white-text">Shoes</h3>
                    <p className="white-text">50% Sales</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="shop-banner-full animated fadeinup delay-3">
              <a href="category.html">
                <img src="img/banner4.jpg" alt="" />
                <div className="opacity-overlay valign-wrapper">
                  <div className="valign center width-100">
                    <h3 className="white-text">Sale</h3>
                    <p className="white-text">50% - 70%</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="clr"></div>
          </div>

          <Footer />

        </div> 

        <Nav />

      </div>
    )
  }
}

export default Featured