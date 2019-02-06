import React, { Component } from 'react';
import Intro from './intro';
import Choice from '../Choice/ChoiceContainer';
import Menu from '../Menu/MenuContainer';
import Scroll from '../../assets/Picto/noun_scrolling_2058570.svg';
import '../../assets/style/ProblemIntro.scss';

class Problem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return(
            <section id="problemIntro">
                <Menu />
                <div className="problem">
                    <h3>Comment la réintroduction<br />
                    d’un animal peut-il littéralement <br />
                    transformer un écosystème ?</h3>

                    <p className="infoScroll">
                    L’expérience se fait au scroll vertical
                    </p>

                    <img src={Scroll} alt="scroll"></img>
                </div>
                <Intro />
                <Choice />
            </section>
        )
    }
}

export default Problem;