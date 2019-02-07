import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import QuizzContainer from '../Quizz/QuizzContainer';


class Quizz2 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz2" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <QuizzContainer  question={'À ton avis, que chassent les loups ?'}
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