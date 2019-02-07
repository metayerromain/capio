import React, { Component } from 'react';
import '../../assets/style/Sl.scss';

class Sl2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }
    
    render () {
        // const { contents, images } = this.state;
        return (

            <div id="Sl2" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                            Avant le retour des loups, le nombre de cervidés n’ont fait qu’augmenter dans le parc, car ils n’avaient pas de prédateurs, et malgrés les efforts humains, ils avaient réduit la végétation à néant, ils l’avaient tout simplement broutée, mangée, dilapidée.                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row jc-end mt-md mt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                            Le surnombre de wapitis ont détruit les vastes zones de végétation, les arbres et arbustes ont cessés de pousser. Les petits animaux comme les souris, les lapins et les belettes ont déserté le parc, Yellowstone est désormais vide de faune                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-2 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-2 zIndex-3 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Sl2;