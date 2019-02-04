import React, { Component } from 'react';
import './assets/style/Reset.scss'
import ReactDOM from 'react-dom';
import {TweenLite} from "gsap/TweenMax";
import Home from './views/Home/HomeContainer';
import Load from './views/Loader/LoaderContainer';
import Choice from './views/Choice/ChoiceContainer';
// import Test from './views/Test';

import './App.css';

class App extends Component {

  componentDidMount(){
    // var anim = ReactDOM.findDOMNode(this).querySelector('.anim');
    // this.myTween = TweenLite.fromTo(anim, 1, { y: 100}, {y:0});
  }

  render() {
    return (
      <div>
        {/* <Test /> */}
        <Load />
        <Home /> 
        <Choice />
        {/* <Problem/> */}
      </div>
    );
  }
}

export default App;
