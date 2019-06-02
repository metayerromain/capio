import React, { Component } from 'react';
import Skip from '../assets/Picto/right-arrow-3.svg';
import { Link } from 'react-router-dom';
import Menu from './Menu/MenuContainer';
import Sl from './Choice/ChoiceSL';

class SlPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <section id="alPage">
                <Link to={`/`} className="logo">
                    <h1>Capio</h1>
                </Link>
                <Menu />
                <Sl />
                <Link to={`/choiceSlAl`} className="slAl">
                    <p>Passez au chapitre 1</p>
                    <img src={Skip} alt="Skip"></img>
                </Link>
            </section>
        )
    }
}

export default SlPage;