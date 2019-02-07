import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import QuizzContainer from '../Quizz/QuizzContainer';


class Quizz10 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz10" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <QuizzContainer  question={'Qui se nourrissent de ces charognes ?'}
                            goodAnswer={'Les aigles'}
                            badAnswer={['Le lynx','Le corbeau']}
                            image={'/images/loup_small_thumbnail.svg'} /> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Quizz10;