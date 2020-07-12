import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Uri from './uri'; //Pemanggilan Router

export default class Header extends Component {
  render() {
    return (
      <Router>
        <header className="main-header header_v1">
          <div className="navbar_outer" >
            <div className="navbar navbar-expand-lg  bsnav bsnav-sticky bsnav-sticky-slide ">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + '/assets/image/home-1-logo.png'} className="img-fluid" alt="img"/></Link>
                  <button className="navbar-toggler toggler-spring"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse scroll-nav">
                    <ul className="navbar-nav navbar-mobile navbar_left  ml-auto">
                        <li className="nav-item"><Link className="nav-link link_hd" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link link_hd" to="/symptom">Symptoms</Link></li>
                        <li className="nav-item"><Link className="nav-link link_hd" to="/prevention">Prevention</Link></li>
                        <li className="nav-item"><Link className="nav-link link_hd" to="/faq">Faq's</Link></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>        
        </header>
        <Uri/>
      </Router>
    )
  }
}
