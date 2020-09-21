import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import SignUpBox from './Components/SignUpBox';
import Welcome from './Components/Welcome';
import SubmitForm from './Components/SubmitForm';
import CheckMail from './Components/CheckMail';
import Success from "./Components/Success";
import Failure from "./Components/Failure";
import Companies from "./Components/Companies";


function App() {
  return(
  <div>
    <AppHeader></AppHeader>
    <Router>
      <Route path="/" exact component={SignUpBox} />
      <Route path="/welcome" exact component={Welcome} />
      <Route path="/welcome/submit" exact component={SubmitForm} />
      <Route path="/welcome/checkmail" exact component={CheckMail} />
      <Route path="/welcome/onboarding" exact component={Companies} />
      <Route path="/welcome/submit/success" exact component={Success} />
      <Route path="/welcome/submit/failure" exact component={Failure} />
    </Router>
    <AppFooter></AppFooter>
  </div>
  );
}

export default App;
