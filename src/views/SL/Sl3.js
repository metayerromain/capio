import React, { Component } from 'react';
import '../../assets/style/Sl.scss';

class Sl3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

    render () {

        return (

            <div id="Sl3" className="section grain">
                <div className="container-fluid">
                    <div className="row jc-end">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                Sans prédateur, ces herbivores se sont mis à se multiplier. Et par la même à endommager la végétation, mangée sans merci par les herbivores. Les conséquences ont rapidement été visibles : glissements de terrain, érosion du terrain pour ne citer que les principales.                </div>
            </div>
        )
    }
}

export default Sl3;
