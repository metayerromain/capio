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

            <div id="Al8" className="section grain">
                <div className="blockText middle-block animText blockText-down-center">
                    Les castors ont utilisé les branchages pour la construction de barrages. Les castors, comme les loups sont des ingénieurs de l’écosystème, ils créent des niches pour d’autres espèces et les barrages qu’ils construisent dans les rivières fournissent des habitats pour les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>loutres </span>, les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>ragondins </span>, les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>canards </span>, les poissons, les reptiles, les amphibiens.                
                </div>
                <div className="img1 img-h-3 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-3 zIndex-3 mt-down-md img anim d-down-none"></div>
                <div className="img3 img-h-3 zIndex-2 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al8;