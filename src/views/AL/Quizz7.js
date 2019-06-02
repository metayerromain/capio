import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import QuizzContainer from '../Quizz/QuizzContainer';


class Quizz7 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz7" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <QuizzContainer  question={'Quel autre animal est touché par toutes ses modifications ?'}
                            goodAnswer={'Le castor'}
                            badAnswer={['Les araignées','Les écureuils']}
                            image={'/images/ours_small_thumbnail.svg'} /> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Quizz7;
