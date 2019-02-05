import React, { Component } from 'react';
import './assets/style/Reset.scss'
import ReactDOM from 'react-dom';
import "gsap";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import "fullpage.js/vendors/scrolloverflow";
import Home from './views/Home/HomeContainer';
import Load from './views/Loader/LoaderContainer';
import Choice from './views/Choice/ChoiceContainer';
import Test from './views/Test';

import './App.css';

class App extends Component {

  componentDidMount(){

  }
 

  render() {
    return (
      <div>
        {/* <Test /> */}
        {/* <Load />
        <Home />  */}
        <Choice />
        {/* <Problem/> */}
      </div>
    );
  }
}

export default App;
