import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import Quizz from '../Quizz/QuizzContainer';


class Quizz1 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz1" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <Quizz  question={'Pensez-vous que les loups ont un quelconque impact sur le comportement des eaux ?'}
                            goodAnswer={'oui'}
                            badAnswer={['non', 'peut être']}
                            image={'/images/loup_small_thumbnail.svg'} /> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Quizz1;