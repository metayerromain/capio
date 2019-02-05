import React, { Component } from 'react';
import '../../assets/style/Al.scss';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

class Al1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render () {
        return (
            <div id="Al1" className="section">
                <div className="blockText anim">
                    <p className="animText">Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres ! </p>
                </div>
                <div className="img1 anim"></div>
                <div className="img2 anim"></div>
                <div className="img3 anim"></div>
            </div>
        )
    }
}

export default Al1;