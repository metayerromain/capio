import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al12 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render () {

        return (
            <div id="Al12" className="section grain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    La population des <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>ours </span> a commencé à augmenter en raison de l’augmentation des baies sur les nouveaux arbustes. Les ours ont accentué la pression des loups en tuant quelques faons.
                </div>
            </div>
        )
    }
}

export default Al12;