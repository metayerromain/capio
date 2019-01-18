import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
// import HomeStyle from '../../assets/style/Home.scss';

class Home extends Component {
  render() {
      const videoOptions = {
        src: '../../src/assets/video/final_wolves.mp4',
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          if (this.videoRef && this.videoRef.paused) {
            this.videoRef.play();
          } else if (this.videoRef) {
            this.videoRef.pause();
          }
        },
        title: 'click to play/pause',
      };
      return ( 
      <div style = {
          {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }
        } >
        <VideoCover videoOptions = {
          videoOptions
        }/>
        </div>
      );
    }
  }


export default Home;
