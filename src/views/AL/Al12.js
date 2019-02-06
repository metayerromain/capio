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
            <div id="Al12" class="section grain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres !
                </div>
            </div>
        )
    }
}

export default Al12;