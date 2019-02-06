import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/MenuContainer';
import Lexique from './Lexique/LexiqueContainer';

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <section id="Lexique">
                <Link to={`/`} className="logo">
                    <h1>Capio</h1>
                </Link>
                <Menu />
                <Lexique />
            </section>
        )
    }
}

export default IndexPage;