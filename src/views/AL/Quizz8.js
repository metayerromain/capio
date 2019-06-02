import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import QuizzContainer from '../Quizz/QuizzContainer';


class Quizz8 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz8" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <QuizzContainer  question={'Qui mange les rongeurs ?'}
                            goodAnswer={'Le scarabé'}
                            badAnswer={['Le loup','Les ours']}
                            image={'/images/rongeur_small_thumbnail.svg'} /> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Quizz8;