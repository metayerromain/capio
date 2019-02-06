import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenLite, TimelineMax, Power3 } from 'gsap';
import ReactFullpage from "@fullpage/react-fullpage";
import Al1 from '../AL/Al1';
import Al2 from '../AL/Al2';
import Al3 from '../AL/Al3';
import Al4 from '../AL/Al4';
import Al5 from '../AL/Al5';
import Al6 from '../AL/Al6';
import Al7 from '../AL/Al7';
import Al8 from '../AL/Al8';
import Al9 from '../AL/Al9';
import Al10 from '../AL/Al10';
import Al11 from '../AL/Al11';
import Al12 from '../AL/Al12';
import Al13 from '../AL/Al13';
import Al14 from '../AL/Al14';

class ChoiceAL extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }

    render(){
        // console.log('t', props)
        const FullpageWrapper = fullpageProps => (
        <ReactFullpage
            {...fullpageProps}
            callbacks= {["afterLoad", "onLeave"]}
            parallax={true}
                render={({ state, props }) => {
                    
                    if(state.initialized){
                        var elementToAnim = document.querySelectorAll('.active .anim');
                        var textToAnim = document.querySelectorAll('.active .animText');

                        var timeline = new TimelineMax({paused: true});
                        timeline.staggerFromTo(textToAnim, .5, {autoAlpha: 0, y: 40 },{autoAlpha:1, y: 0 }, 0.30);
                        timeline.staggerFromTo(elementToAnim, .5, { autoAlpha: 0, y: 40}, {autoAlpha: 1, y: 0, ease: Power3.easeInOut}, .15, "start");

                        timeline.play();

                        if(state.callback === "onLeave"){
                            timeline.reverse();
                        }
                    }

                    return(
                        <section id="fullpage-wrapper">
                            <Al1 />
                            <Al2 />
                            <Al3 />
                            <Al4 />
                            <Al5 />
                            <Al6 />
                            <Al7 />
                            <Al8 />
                            <Al9 />
                            <Al10 />
                            <Al11 />
                            <Al12 />
                            <Al13 />
                            <Al14 />
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

export default ChoiceAL;