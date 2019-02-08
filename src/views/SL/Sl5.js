import React, { Component } from 'react';
import '../../assets/style/Sl.scss';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import { Link } from 'react-router-dom';

class Sl5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render () {

        return (
            <div id="Sl5" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-down-center mt-down-0">
                            Abattre les prédateurs n’était pas vraiment une idée de génie. Malgré la régulation de l’Homme, l’explosion du nombre de cervidés, sans prédateur naturel, a conduit à une réduction drastique de la végétation ainsi qu’à une foule de conséquences négatives qui ont été jusqu’à toucher les rivières.                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-1 zIndex-2 mt-down-md img anim d-down-none"></div>
                <Link to={`/choiceAl`} className="al bond">
                    <p>Passez au chapitre 2</p>
                    <img src={Skip} alt="Skip"></img>
                </Link>
            </div>
        )
    }
}

export default Sl5;