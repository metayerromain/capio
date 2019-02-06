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
                    Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres !
                </div>
            </div>
        )
    }
}

export default Al3;
