import React, { Component } from 'react';
import Home from './Home';
import video from '../../../src/assets/video/final_wolves.mp4';

class HomeContainer extends Component {

  state={
    videoOptions : { 
      src: video,
      title: 'click to play/pause',
    },
    paused : false
  }

  skipVideo = (e) => {
    console.log('skip')
  }

  clickVideo = (e) => {
    console.log(this.state.paused)
    if(this.state.paused === false){
      e.target.play();
      this.setState({
        paused : true
      })
    } else{
      e.target.pause();
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
        skipVideo = {this.skipVideo}
      />
    );
  }
}

export default HomeContainer;
