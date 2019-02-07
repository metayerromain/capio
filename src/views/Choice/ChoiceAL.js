import React, { Component } from 'react';
import { TimelineMax, Power3 } from 'gsap';
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
import Quizz1 from '../AL/Quizz1';
import Quizz2 from '../AL/Quizz2';
import Quizz3 from '../AL/Quizz3';
import Quizz4 from '../AL/Quizz4';
import Quizz5 from '../AL/Quizz5';
import Quizz6 from '../AL/Quizz6';
import Quizz7 from '../AL/Quizz7';
import Quizz8 from '../AL/Quizz8';
import Quizz9 from '../AL/Quizz9';
import Quizz10 from '../AL/Quizz10';
import Quizz11 from '../AL/Quizz11';
import Quizz12 from '../AL/Quizz12';
import Quizz13 from '../AL/Quizz13';

class ChoiceAL extends Component {

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
                            <Al1 lexique={[{title:'titre1', content:'contenu1'}, {title:'titre2', content:'contenu2'}]}/>
                            <Quizz1 />
                            <Al2 />
                            <Quizz2 />
                            <Al3 />
                            <Quizz3 />
                            <Al4 />
                            <Al5 />
                            <Quizz4 />
                            <Quizz5 />
                            <Al6 />
                            <Quizz6 />
                            <Al7 />
                            <Quizz7 />
                            <Al8 />
                            <Al9 />
                            <Al10 />
                            <Quizz8 />
                            <Quizz9 />
                            <Al11 />
                            <Quizz10 />
                            <Quizz11 />
                            <Al12 />
                            <Al13 />
                            <Quizz12 />
                            <Quizz13 />
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