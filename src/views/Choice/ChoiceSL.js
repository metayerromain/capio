import React, { Component } from 'react';
import { TimelineMax, Power3 } from 'gsap';
import ReactFullpage from "@fullpage/react-fullpage";
import Sl1 from '../SL/Sl1';
import Sl2 from '../SL/Sl2';
import Sl3 from '../SL/Sl3';
import Sl4 from '../SL/Sl4';
import Sl5 from '../SL/Sl5';

class ChoiceSL extends Component {

    render(){
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
                            <Sl1 lexique={[{title:'titre1', content:'contenu1'}, {title:'titre2', content:'contenu2'}]}/>
                            <Sl2 />
                            <Sl3 />
                            <Sl4 />
                            <Sl5 />
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

export default ChoiceSL;