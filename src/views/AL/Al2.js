import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    render () {
        return (
            <div id="Al2" class="section">
                <div className="blockText anim">
                    <p className="animText">Les loups sont des prédateurs de premier plan qui ont des effets bénéfiques de grande envergure sur des écosystèmes entiers - y compris la structure des rivières.</p>
                </div>
                <div className="blockText2 anim">
                    <p class="animText">Dès que les loups ont été réintroduits dans le parc, même en petit nombre, l’impact fut spectaculaire. Les influences bénéfiques des loups réintroduits sont devenues presque immédiatement apparentes.</p>
                </div>
                <div className="img1 anim"></div>
                <div className="img2 anim"></div>
            </div>
        )
    }
}

export default Al2;