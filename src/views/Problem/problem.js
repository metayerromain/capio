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
                render={({ state, fullpageApi }) => {
                    
                    if(state.initialized){
                        var elementToAnim = document.querySelectorAll('.intro-anim');
                        var advanced = document.querySelector('.advanced');
                        if(state.callback === "onLeave"){
                            if(state.destination.index === 1){
                                elementToAnim.forEach((element, i) => {
                                    var tl = new TimelineMax({delay:i*7});
                                    tl.fromTo(advanced, 6.6, {scaleX: 0}, {scaleX: 1, transformOrigin:"left", ease: Power3.easeInOut}, 'start')
                                    tl.to(element, 1, {autoAlpha:1, ease: Power3.easeInOut}, 'start')
                                    tl.to(element, .5, {autoAlpha:0}, '6.6')
                                    tl.eventCallback("onComplete", function(i, element){
                                        if(i === elementToAnim.length - 1){
                                            fullpageApi.moveSectionDown()
                                        }
                                    },[i, element]);
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