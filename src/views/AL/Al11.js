import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al11 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
 
    render () {

        return (
            <div id="Al11" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-md">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim mt-down-0 blockText-down-center">
                                Les loups ont tué les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>coyottes </span>, ce qui a entraîné une augmentation des lapins et de souris, l’apparition de <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>faucons </span>, de belettes, de <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>renards </span> et de blaireaux. Les aigles et les corbeaux se sont nourris des charognes laissé par les loups. Les castors ont également renforcé le travail des loups en tuant les bébés chevreuils.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-1 zIndex-2 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al11;