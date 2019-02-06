import React, { Component } from 'react';
import '../../assets/style/Home.scss';
import Home from './Home';
import video from '../../assets/video/final_wolves.mp4';

class HomeContainer extends Component {

  state={
    videoOptions : { 
      src: video,
      title: 'click to play/pause',
    },
    paused : false,
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

  startVideo = () => {
    let video = document.getElementById("video");
    let introVideo = document.getElementById("introVideo");
    console.log(video)
    video.play();
    introVideo.style.display="none";
  }

  render(){
    console.log(this.state.videoOptions)
    return ( 
      <Home 
        videoOptions = {this.state.videoOptions}
        clickVideo = {this.clickVideo} 
        skipVideo = {this.props.skipVideo}
        endVideo = {this.props.endVideo}
        startVideo = {this.startVideo}
      />
    );
  }
}

export default HomeContainer;
