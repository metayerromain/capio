import React, { Component, Fragment } from 'react';
import '../../assets/style/Al.scss';
import QuizzContainer from '../Quizz/QuizzContainer';


class Quizz11 extends Component {
    constructor(props) {
        super(props)

    }

    
    render () {
        return (
            <Fragment>
                <div id="Quizz11" className="section grain">
                    <div className="container">
                        <div className="row pt-down-0">
                            <QuizzContainer  question={'Les ours gourmands se sont installés à Yellowstone car ils pouvaient y trouver un fruit. Lequel ?'}
                            goodAnswer={'La baie'}
                            badAnswer={['La myrtille','La mûre']}
                            image={'/images/loup_small_thumbnail.svg'} /> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Quizz11;