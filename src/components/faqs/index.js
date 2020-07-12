import React from 'react';

export default function Faqs() {
  return (
    <section className="faqs type_one" id="faq">
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="heading icon_dark text-center  tp_one">
                  <h6>Faq's</h6>
                  <h1>Friquently Ask Questions</h1>
                  <span className="flaticon-virus icon"></span>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
              <div id="accordion">
                  <div className="card faq_box type_one">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="faq_btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Why is the disease being called coronavirus disease 2019, COVID-19?<span className="flaticon-question-2 faq_icon"></span>
                          </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as
                          COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”. 
                        </div>
                    </div>
                  </div>
                  <div className="card faq_box type_one">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Why might someone blame or avoid individuals and groups (create stigma) because of COVID-19?<span className="flaticon-question-2 faq_icon"></span>
                          </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                  </div>
                  <div className="card faq_box type_one">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="faq_btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Can someone who has had COVID-19 spread the illness to others?<span className="flaticon-question-2 faq_icon"></span>
                          </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
