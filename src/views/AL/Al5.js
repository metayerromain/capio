import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render () {
        return (
            <div id="Al5" class="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim mt-half blockText-down-center mt-down-0">
                                Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres !                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-1 zIndex-2 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al5;