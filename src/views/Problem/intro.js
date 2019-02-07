import React, { Component } from 'react';
import { TimelineMax, Power3 } from 'gsap';

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
                    Ce qui a donné aux biologistes une occasion unique d'étudier ce qui se passe lorsqu'un prédateur supérieur retourne à un écosystème.
                </div>
                <div className="intro-anim">
                    Ce qui a donné aux biologistes une occasion unique d'étudier ce qui se passe lorsqu'un prédateur supérieur retourne à un écosystème.
                </div>
                <div className="intro-anim">
                    Ce qui a donné aux biologistes une occasion unique d'étudier ce qui se passe lorsqu'un prédateur supérieur retourne à un écosystème.
                </div>
                <div className="intro-anim">
                    Ce qui a donné aux biologistes une occasion unique d'étudier ce qui se passe lorsqu'un prédateur supérieur retourne à un écosystème.
                </div>
            </div>
        ) 
    }
}

export default Intro1;