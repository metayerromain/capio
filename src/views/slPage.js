import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/MenuContainer';
import Al from './Choice/ChoiceAL';
import Sl from './Choice/ChoiceSL';
import Conclusion from './Conclusion/ConclusionContainer';

class SlPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Al: false,
            Sl: true,
            Conclusion: false,
        }
    }

    showAl = () => {
        this.setState({
            Al: true,
            Sl: false,
            Conclusion: false,
        })
    }

    showCon = () => {
        this.setState({
            Al: false,
            Sl: false,
            Conclusion: true,
        })
    }

    render() {
        if(this.state.Sl) {
            return(
                <section id="alPage">
                    <Link to={`/`} className="logo">
                        <h1>Capio</h1>
                    </Link>
                    <Menu />
                    <Sl
                        showAl = {this.showAl}
                    />
                </section>
            )
        } else if(this.state.Al) {
            return(
                <section id="alPage">
                    <Link to={`/`} className="logo">
                        <h1>Capio</h1>
                    </Link>
                    <Menu />
                    <Al
                        showCon = {this.showCon}
                    />
                </section>
            )
        } else if(this.state.Conclusion) {
            return(
                <section id="alPage">
                    <Link to={`/`} className="logo">
                        <h1>Capio</h1>
                    </Link>
                    <Menu />
                    <Conclusion />
                </section>
            )
        }
        
    }
}

export default SlPage;