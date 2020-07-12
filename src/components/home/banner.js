import React, { Component } from 'react'

export default class Banner extends Component {

  render() {
    return (
      <section className="banner type_one">
        <div class="slider_box clearfix">
            <div className="slider_image_1">
              <img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-1-slider-1.png'} className="img-fluid" alt="img" />
            </div> 
            <div className="slider_image_2 image">
              <img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-1-slider-2.png'} className="img-fluid" alt="img" />
            </div>
            <div className="slider_image_3 image">
            </div>
            <div className="slider_image_4 image">
              <img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-1-slider-grass-2.png'} className="img-fluid" alt="img" />
            </div>
        </div>
        <div className="slider_text_box">
					<div className="container-fluid">
							<div className="row">
								<div className="col-lg-6">
										<div className="text_box">
                    <span className="bg_text wow zoomInDown" data-wow-delay="0ms" data-wow-duration="1500ms">19</span>
                    <h1 className="wow bounceInDown" data-wow-delay="0ms" data-wow-duration="1500ms">Coronavirus<br className="md_none"/> Disease Advice<br className="md_none"/> for the Public.</h1>
                    <p class="wow bounceInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                        Symptoms such as a cough, fever, and in more <br class="md_none"/>severe cases, difficulty breathing
                    </p>
                    </div>
								</div>
							</div>
					</div>
        </div>
        <div className="slider_bubbles">
            <ul className="slider_bub">
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-1.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-2.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-3.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-4.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-5.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-6.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-5.png'} className="img-fluid" alt="bubbles" /></li>
              <li><img src={process.env.PUBLIC_URL + 'assets/image/main-slider/home-slider-bubbles-6.png'} className="img-fluid" alt="bubbles" /></li>
            </ul>
        </div>
      </section>
    )
  }
}
