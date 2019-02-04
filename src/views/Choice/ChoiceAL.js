import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
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
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const styles = {
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return(
            <section id="Al">
            {/*<Parallax ref="parallax" pages={3}>

            <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
            <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(1)}>
                <Al1 />
            </Parallax.Layer>

            <Parallax.Layer
                offset={1}
                speed={-0.1}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(2)}>
                <Al2 />
            </Parallax.Layer>

            <Parallax.Layer
                offset={2}
                speed={0.5}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(0)}>
                <Al3 />
            </Parallax.Layer> 

            </Parallax> */}
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
                <div class="nav-panel">
                    <div class="scroll-btn up"></div>
                    <div class="scroll-btn down"></div>
                    <nav>
                        <ul>
                            <li data-target="1" class="nav-btn nav-page1 active"></li>
                            <li data-target="2" class="nav-btn nav-page2"></li>
                            <li data-target="3" class="nav-btn nav-page3"></li>
                            <li data-target="4" class="nav-btn nav-page4"></li>
                            <li data-target="5" class="nav-btn nav-page5"></li>
                            <li data-target="6" class="nav-btn nav-page6"></li>
                            <li data-target="7" class="nav-btn nav-page7"></li>
                            <li data-target="8" class="nav-btn nav-page8"></li>
                            <li data-target="9" class="nav-btn nav-page9"></li>
                            <li data-target="10" class="nav-btn nav-page10"></li>
                            <li data-target="11" class="nav-btn nav-page11"></li>
                            <li data-target="12" class="nav-btn nav-page12"></li>
                            <li data-target="13" class="nav-btn nav-page13"></li>
                            <li data-target="14" class="nav-btn nav-page14"></li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default ChoiceAL;