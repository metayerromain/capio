import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render () {

        return (

            <div id="Al3" className="section grain">
                <div className="container-fluid">
                    <div className="row jc-end">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    Puisqu'ils sont des prédateurs qui chassent principalement des ongulés malades et vieillissants - particulièrement les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>wapitis </span>, dont les populations ont explosé à Yellowstone - les loups ont arrêté l'expansion de ces populations d'herbivores tout en améliorant leur santé globale.
                </div>
            </div>
        )
    }
}

export default Al3;
