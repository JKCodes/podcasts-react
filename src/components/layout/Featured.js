import React, { Component } from 'react'
import { Footer, Nav, Search } from '../presentation'
import { Podcasts } from '../containers'

class Featured extends Component {
  render() {
    return (
      <div id="main"> 
      
        <div id="content" className="main animated fadein">
          <div className="hero-header bg-shop animated fadeindown">
            <h1 className="hero-title">Shop</h1>
          </div>

          <Search />

          <div className="animated fadeinup delay-1">
            <Podcasts />
            
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