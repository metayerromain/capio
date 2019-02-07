import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al7 extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render () {

        return (

            <div id="Al7" className="section grain">
                <div className="container">
                    <div className="row jc-end pt-xl pt-down-md">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim d-down-none"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    Les oiseaux migrateurs ont augmenté considérablement, le nombre de <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>castors </span> a aussi augmenté car ils aiment manger les arbres. Les castors ont utilisé les branchages pour la construction de barrages.
                </div>
            </div>
        )
    }
}

export default Al7;