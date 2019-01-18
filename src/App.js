import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TweenLite} from "gsap/TweenMax";
import Home from './views/Home/HomeContainer'

import './App.css';

class App extends Component {

  componentDidMount(){
    var anim = ReactDOM.findDOMNode(this).querySelector('.anim');
    this.myTween = TweenLite.fromTo(anim, 1, { y: 100}, {y:0});
  }

  render() {
    return (
      <div className="App">
        <Home></Home>
        {/* <Problem/> */}
      </div>
    );
  }
}

export default App;
