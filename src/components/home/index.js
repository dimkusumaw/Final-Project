import React, { Component } from 'react';
import Banner from './banner';
import About from './about';
import Funfact from './funfact';

export default class Home extends Component {
  render() {
    return (
      <main className="content" id="home">
        <Banner/>
        <About/>
        <Funfact/>
      </main>
    )
  }
}
