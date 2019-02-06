import React, { Component } from 'react';
import Menu from './Menu/MenuContainer';

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <section id="Lexique">
                <h1 className="logo">Capio</h1>
                <Menu />
            </section>
        )
    }
}

export default IndexPage;