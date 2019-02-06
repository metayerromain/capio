import React, { Component } from 'react';
import Intro from './intro';
import Choice from '../Choice/ChoiceContainer';
import Scroll from '../../assets/Picto/noun_scrolling_2058570.svg';
import '../../assets/style/ProblemIntro.scss';
import ReactFullpage from "@fullpage/react-fullpage";
// import { TimelineMax, Power3 } from 'gsap';
import { TweenLite, TimelineMax, Linear, Back, Sine, Power3 } from 'gsap';


class Problem extends Component {



    render(){
        const FullpageWrapper = fullpageProps => (
        <ReactFullpage
            {...fullpageProps}
            callbacks= {["afterLoad", "onLeave"]}
            parallax={true}
                render={({ state, props }) => {
                    
                    if(state.initialized){
                        var elementToAnim = document.querySelectorAll('.intro-anim');
                        if(state.callback === "onLeave"){
                            if(state.destination.index === 1){
                                elementToAnim.forEach((element, i) => {
                                    var tl = new TimelineMax({delay:i*7});
                                    tl.to(element, 1, {autoAlpha:1})
                                    tl.to(element, .5, {autoAlpha:0}, '6.6')
                                });
                            }
                        }
                    }

                    return(
                        <section id="problemIntro">
                            <section id="fullpage-wrapper">
                                <div className="problem section">
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
                        </section>

                    )
                }}
            />
        );

        return (
            <div>
                <FullpageWrapper {...this.state}/>
            </div>
        )
    }


}

export default Problem;