import React, { Component } from 'react'

export default class Funfact extends Component {

  render() {
    return (
        <section className="funfacts type_one">
          <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <div className="heading tp_one text-center text_white icon_dark">
                      <h6>Funfacts</h6>
                      <span className="flaticon-virus icon"></span>
                      <h1>Keep Your Headup & Be Patient</h1>
                  </div>
                </div>
            </div>
            <div className="about_fun_facts">
                <div className="row">
                  <div className="col-lg-3">
                      <div className="fun_facts_box type_one">
                        <div className="icon">
                            <img src={ process.env.PUBLIC_URL + 'assets/image/svg/virus.svg'} className="img-fluid svg_image" alt="home" />
                        </div>
                        <h2><span className="counter-value">11841326</span>+</h2>
                        <h6>Total Confirmed</h6>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="fun_facts_box type_one">
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/partnership.svg'} className="img-fluid svg_image" alt="home" />
                        </div>
                        <h2><span className="counter-value" data-count="">213</span></h2>
                        <h6>Countries / Regions</h6>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="fun_facts_box type_one">
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/man.svg'} className="img-fluid svg_image" alt="home" />
                        </div>
                        <h2><span className="counter-value">6533436</span>+</h2>
                        <h6>Total Recoverd</h6>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="fun_facts_box type_one last">
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/tombstones.svg'} className="img-fluid svg_image" alt="home" />
                        </div>
                        <h2><span className="counter-value">544739</span>+</h2>
                        <h6>Confirmed Deaths</h6>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </section>
    )
  }
}
