import React, {useReducer} from 'react';

export default function Check() {
  const checkboxStyle = {
    width: "30px"
  }

  
  const collect = [
    {  key:1, checked: false, value: 'Headache' },
    {  key:2, checked: false, value: 'Sore Throat' },
    {  key:3, checked: false, value: 'Shortness of Breath' },
    {  key:4, checked: false, value: 'Cough' },
    {  key:5, checked: false, value: 'Diarrhea' },
    {  key:6, checked: false, value: 'Vomit' },
    {  key:7, checked: false, value: 'Tired' },
    {  key:8, checked: false, value: 'Fever' },

];

  const initialState = {
    change: collect.checked
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  const clearFilter = () => setState(initialState);

  const onCheckChange = event => setState({change: event});

  const symtomList =  collect.map((item, i) =>
    <div className="col-lg-6 col-md-6">
      <div className="form-group">
          <label>{ item.value }</label>
          <input id={item.key} type="checkbox" className="form-control" style={checkboxStyle} onChange={onCheckChange}/>
      </div>
    </div>
  );

  return (
    <section className="contact_form type_one" id="contact">
      <div id="bubbles">
        <figure className="image bubble_4">
            <img src={process.env.PUBLIC_URL + 'assets/image/resources/home-1-contact-bubbles-1.png'} className="img-fluid" alt="img" />
        </figure>
        <figure className="image bubble_5">
            <img src={process.env.PUBLIC_URL + 'assets/image/resources/home-1-contact-bubbles-2.png'} className="img-fluid" alt="img" />
        </figure>
        <figure className="image bubble_6">
            <img src={process.env.PUBLIC_URL + 'assets/image/resources/home-1-contact-bubbles-3.png'} className="img-fluid" alt="img" />
        </figure>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading icon_dark tp_one">
                  <h6>Let's Try</h6>
                  <h1>Check Your Symtoms </h1>
                  <span className="flaticon-virus icon"></span>
              </div>
              <div className="contact_form_box type_one">
                <div className="row">
                  {symtomList}

                  <h2>Status: </h2>
                </div>
                <h1>{state.change ? ' Infected' : ' Stay at Home'}</h1>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
