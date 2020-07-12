import React from 'react';

export default function Symtoms() {
  return (
    <section className="symptoms type_one" id="symptoms">
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="heading tp_one text-center">
                  <h6>symptoms</h6>
                  <h1>Watch for symptoms</h1>
                  <span className="flaticon-virus icon"></span>
                  <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
              <div className="image_box">
                  <img src={process.env.PUBLIC_URL + 'assets/image/resources/Sym.png'} className="img-fluid" alt="img" />
              </div>
              <div className="symptoms_content">
                  <div className="symptoms_box_one left first wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/headache.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Headache </h2>
                    </div>
                    <div className="content_box">
                        <h2>Headache </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one left second  wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/sore-throat.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Sore Throat </h2>
                    </div>
                    <div className="content_box">
                        <h2>Sore Throat </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one left third  wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/breath.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Shortness Of Breath </h2>
                    </div>
                    <div className="content_box">
                        <h2>Shortness Of Breath </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one left fourth  wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/diarrhea.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Diarrhea </h2>
                    </div>
                    <div className="content_box">
                        <h2>Diarrhea </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one right first  wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/fever.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Fever </h2>
                    </div>
                    <div className="content_box">
                        <h2>Fever </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one right second  wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/cough.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Cough </h2>
                    </div>
                    <div className="content_box">
                        <h2>Cough </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one right third  wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/nausea.svg'}className="img-fluid svg_image" alt="headache" />
                        <h2>Vomit </h2>
                    </div>
                    <div className="content_box">
                        <h2>Vomit </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
                  <div className="symptoms_box_one right fourth  wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon_box">
                        <img src={process.env.PUBLIC_URL + 'assets/image/svg/asleep.svg'} className="img-fluid svg_image" alt="headache" />
                        <h2>Tired </h2>
                    </div>
                    <div className="content_box">
                        <h2>Tired </h2>
                        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
  )
}
