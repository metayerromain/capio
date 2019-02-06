import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al8 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render () {
        return (
            <div id="Al8" class="section grain">
                <div className="blockText middle-block animText blockText-down-center">
                    Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres !
                </div>
                <div className="img1 img-h-3 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-3 zIndex-3 mt-down-md img anim d-down-none"></div>
                <div className="img3 img-h-3 zIndex-2 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al8;