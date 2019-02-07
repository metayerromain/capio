import React, { Component } from 'react';
import Intro from './intro';
import Choice from '../Choice/ChoiceContainer';
import '../../assets/style/ProblemIntro.scss';
import ReactFullpage from "@fullpage/react-fullpage";
import { TweenLite, TimelineMax, Power3 } from 'gsap';
import SplitText from '../../assets/lib/SplitText'


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
                        var introText = document.querySelectorAll('.animTextProblem');
                        if(state.destination.index === 0){
                            var tlSplit = new TimelineMax({paused:true}), 
                            mySplitText = new SplitText(introText, {type:"lines"}), 
                            lines = mySplitText.lines; 
                            tlSplit.staggerFromTo(introText, 0, {autoAlpha: 0}, {autoAlpha: 1}, "+=4");
                            tlSplit.staggerFromTo(lines, 0.4, {opacity:0, y:80}, {opacity:1, y:0}, 0.1, 'start');
                            tlSplit.play();
                        }
                        if(state.callback === "onLeave"){
                            if(state.destination.index === 1){
                                introText.forEach((element, i)=>{
                                    element.style.opacity="0";
                                });
                                elementToAnim.forEach((element, i) => {
                                    var tl = new TimelineMax({delay:i*7});
                                    tl.fromTo(advanced, 6.6, {scaleX: 0}, {scaleX: 1, transformOrigin:"left", ease: Power3.easeInOut}, 'start')
                                    tl.to(element, 1, {autoAlpha:1, ease: Power3.easeInOut}, 'start')
                                    tl.to(element, .5, {autoAlpha:0}, '6.6');
                                    tl.eventCallback("onComplete", function(i){
                                        if(i === elementToAnim.length - 1){
                                            fullpageApi.moveSectionDown()
                                        }
                                    },[i]);
                                });
                            }
                        }
                    }

                    return(
                        <section id="problemIntro">
                            <section id="fullpage-wrapper">
                                <div className="problem section">
                                    <h3 className="animTextProblem">Comment la réintroduction<br />
                                    d’un animal peut-il littéralement <br />
                                    transformer un écosystème ?</h3>

                                    <p className="infoScroll">
                                    L’expérience se fait au scroll vertical
                                    </p>

                                    <div class="mouse">
                                        <div class="scroll"></div>
                                    </div>
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