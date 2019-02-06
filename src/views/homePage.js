import React, { Component } from 'react';
import Home from '../views/Home/HomeContainer';
import ProblemIntro from '../views/Problem/problem';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: false,
            problem: true,
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
                    <h1 className="logo">Capio</h1>
                    <ProblemIntro />
                </div>
            )
        } 
    }
}

export default HomePage;