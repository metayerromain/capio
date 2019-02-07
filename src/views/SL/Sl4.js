import React, { Component } from 'react';
import '../../assets/style/Sl.scss';

class Sl4 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

 
    render () {

        return (
            <div id="Sl4" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0 jc-end">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-down-center mt-down-0">
                            En l’espace de quelques années, le wapiti avait remplacé le loup comme exemple de souci écologique du Yellowstone, mais il a fallu plusieurs années pour que l’idée d’une réintroduction du loup dans le parc fasse l’unanimité parmi les acteurs de la communauté locale.                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-2 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-2 zIndex-3 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Sl4;