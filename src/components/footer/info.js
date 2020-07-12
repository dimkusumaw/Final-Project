import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <section className="footer type_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xs-12">
              <div className="footer_widgets tp_one first">
                  <h3 className="widgets_title logo">
                    <a href="index.html"><img src={ process.env.PUBLIC_URL + 'assets/image/home-1-logo.png'} className="img-fluid" alt="logo" /></a>
                  </h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12">
              <div className="footer_widgets tp_one">
                  <h3 className="widgets_title">Contact us</h3>
                  <div className="inner_widgets">
                    <div className="text_box">
                        <h2>Location</h2>
                        <p>Jabar Office.</p>
                    </div>
                    <div className="text_box">
                        <h2>Call us on</h2>
                        <p>+62 555 67 890</p>
                        <p>Mon - Fri: 09.00 to 18.00</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
