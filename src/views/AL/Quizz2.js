import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import Quizz from '../Quizz/QuizzContainer';


class Quizz2 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
            <div id="Al2" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <Quizz  question={'À ton avis, que chassent les loups ?'}
                          goodAnswer={'wapitis'}
                          badAnswer={['ours','canards']}
                          image={'/images/loup_small_thumbnail.svg'} /> 
                    </div>
                </div>
            </div>
                
            </Fragment>
        )
    }
}

export default Quizz2;