import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/MenuContainer';
import Home from '../views/Home/HomeContainer';
import ProblemIntro from '../views/Problem/problem';
import Sound from 'react-sound';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            problem: false,
        }
    }

    skipVideo = () => {
        this.setState({
            home: false,
            problem: true,
        })
    }

    endVideo = () => {
        this.setState({
            home: false,
            problem: true,
        })
    }

    render() {
        if(this.state.home) {
            return(
                <div id="HomePage">
                    <Home
                        skipVideo={this.skipVideo}
                        endVideo={this.endVideo}
                    />
                </div>
            )
        } else if (this.state.problem) {
            return(
                <div id="HomePage">
                    <Sound
                    url="ambiance.mp3"
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={1000 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                    <Link to={`/`} className="logo">
                        <h1>Capio</h1>
                    </Link>
                    <Menu />
                    <ProblemIntro />
                </div>
            )
        } 
    }
}

export default HomePage;