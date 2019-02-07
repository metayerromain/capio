import React, { Component } from 'react';

class Intro1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return(
            <div className="intro1 section">
                <div className="advanced"></div>
                <div className="intro-anim">
                1
                </div>
                <div className="intro-anim">
2
                </div>
                <div className="intro-anim">
3
                </div>
                <div className="intro-anim">
4
                </div>
            </div>
        ) 
    }
}

export default Intro1;