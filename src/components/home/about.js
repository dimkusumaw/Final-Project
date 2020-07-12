import React, { Component } from 'react'

export default class About extends Component {

  render() {
    return (
      <section className="about type_one bg_white" id="about">
        <div className="container">
          <div className="row">
              <div className="col-lg-6">
                <div className="heading  tp_one">
                    <h6>about Corona</h6>
                    <h1>Coronavirus Disease 2019 (COVID-19)</h1>
                    <span className="flaticon-virus icon"></span>
                </div>
                <div className="about_content">
                    <p className="description">It is a long established fact that a reader will be distracted . The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                      like readable English.
                    </p>
                    <div className="symptoms">
                      <h2>The best way to prevent illness is to avoid being exposed to this virus.</h2>
                      <div className="row">
                          <div className="col-lg-6">
                            <ul>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Clean AND disinfect frequently touched surfaces </p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Avoid touching your eyes, nose, and mouth</p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Clean your hands with a hand sanitizer </p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Cover coughs and sneezes</p>
                                </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Stay home if you’re sick</p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Wear a facemask if sick</p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Cover your mouth and nose </p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Throw used tissues in trash</p>
                                </li>
                                <li>
                                  <span className="flaticon-check"></span>
                                  <p>Ensure solution has at least 70% alcohol.</p>
                                </li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 first_column">
                      <div className="icon_box type_one wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/working-at-home.svg'} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                          </div>
                          <div className="content_box">
                            <h2><a href="#">Stay at Home</a></h2>
                            <p>It is a long established fact that a reader will be distracted . </p>
                          </div>
                      </div>
                      <div className="icon_box type_one wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/mask-2.svg'} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                          </div>
                          <div className="content_box">
                            <h2><a href="#">Protect yourself</a></h2>
                            <p>It is a long established fact that a reader will be distracted . </p>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-6 second_column">
                      <div className="icon_box type_one wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/sport-team.svg'} className="img-fluid svg_image" alt="home" /> <span className="flaticon-virus"></span>
                          </div>
                          <div className="content_box">
                            <h2><a href="#">Be Supportive</a></h2>
                            <p>It is a long established fact that a reader will be distracted . </p>
                          </div>
                      </div>
                      <div className="icon_box type_one last wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div className="icon">
                            <img src={process.env.PUBLIC_URL + 'assets/image/svg/smartphone.svg'} className="img-fluid svg_image" alt="svg" /> <span className="flaticon-virus"></span>
                          </div>
                          <div className="content_box">
                            <h6>Emergency Contact</h6>
                            <h2><a href="#">(+62) 811-2214-152</a></h2>
                          </div>
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
