import React, { Component } from 'react';
import '../../assets/style/Sl.scss';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import { Link } from 'react-router-dom';

class Sl5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contents: [],
            images: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8888/capio/api/content/read.php')
        .then(response => response.json())
        .then(data => this.setState({ contents: data.contents }));

        fetch('http://localhost:8888/capio/api/images/read.php')
        .then(response => response.json())
        .then(data => this.setState({ images: data.images }));
  
    }


    render () {

        return (
            <div id="Sl5" className="section grain">
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
                <Link to={`/choiceAl`} className="al">
                    <p>Passez au chapitre 2</p>
                    <img src={Skip} alt="Skip"></img>
                </Link>
            </div>
        )
    }
}

export default Sl5;