import React, { Component } from 'react';
import Home from './Home';
import ReactDOM from 'react-dom';

class HomeContainer extends Component {

  state={
    videoOptions : { 
      src: '../../src/assets/video/final_wolves.mp4',
      title: 'click to play/pause',
    },
    paused : false
  }

  clickVideo = (e) => {
    if(!this.state.paused){
      e.target.pause();
      this.setState({
        paused : true
      })
    } else{
      e.target.play();
      this.setState({
        paused : false
      })
    }
  }

  render(){
    console.log(this.state.videoOptions)
    return ( 
      <Home 
        videoOptions = {this.state.videoOptions}
        clickVideo = {this.clickVideo}
      />
    );
  }
}

export default HomeContainer;
