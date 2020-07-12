import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Home from '../home'; //Pemanggilan Component Home
import Symtom from '../symtom'; //Pemanggilan Component Symtom
import Prevention from '../prevention'; //Pemanggilan Component Prevention
import Faqs from '../faqs'; //Pemanggilan Component Faqs

export default function Uri() {
  return (
    <Switch>
      <Route path="/symptom">
        <Symtom />
      </Route>
      <Route path="/prevention">
        <Prevention />
      </Route>
      <Route path="/faq">
        <Faqs />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
