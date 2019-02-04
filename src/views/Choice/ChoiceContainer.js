import React, { Component } from 'react';
import ChoiceAL from './ChoiceAL';
import ChoiceSL from './ChoiceSL';
import '../../assets/style/Choice.scss';

class Choice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            choiceAl: false,
            choiceSl: false,
        }
    }

    buttonAl = () => {
        this.setState({
            choiceAl: true,
            choiceSl: false,
        })
    }

    buttonSl = () => {
        this.setState({
            choiceAl: false,
            choiceSl: true,
        })
    }

    render() {
        if (this.state.choiceAl === false && this.state.choiceSl === false) {
            return(
                <section id="choices">
                    <div className="buttonSl" onClick={() => this.buttonSl()}>
                        <p>Yellowtone <br /> sans les loups</p>
                    </div>
                    <div className="buttonAl" onClick={() => this.buttonAl()}>
                    <p>Yellowtone <br /> avec les loups</p>
                    </div>
                </section>
            )
        } else if(this.state.choiceSl === true ) {
            return(
                <ChoiceSL />
            )
        } else if (this.state.choiceAl === true ) {
            return(
                <ChoiceAL />
            )
        }
    }
}

export default Choice;