import React from 'react'

export default function Prevention() {
  return (
    <section className="preventions type_one bg_white" id="prevention">
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="heading text-center tp_one">
                  <h6>Prevention Coronavirus</h6>
                  <h1>The best way to prevent illness is to avoid being exposed to this virus.</h1>
                  <span className="flaticon-virus icon"></span>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Wash your hands often with soap</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/spongewash.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Avoid touching your eyes, nose, and mouth</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/man-touch.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Avoid close contact with people who are sick</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/socialspreading.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Stay home if you are sick,  get medical care</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/sorethroat.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Cover your mouth and nose with a tissue</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/masksick.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">Immediately wash your hands with  water</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/handwashwashing.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">If you are sick: You should wear a facemask</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/maskmedical.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon_box type_two wow fadeIn" data-wow-delay="700ms" data-wow-duration="1500ms">
                  <h2><a href="prevention-single.html">If surfaces are dirty, clean them</a></h2>
                  <div className="icon_box">
                    <img src={process.env.PUBLIC_URL + 'assets/image/svg/object-hygiene.svg'} className="img-fluid svg_icon" alt="img" />
                  </div>
                  <p>at least 20 seconds especially after you have been in a public place.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
