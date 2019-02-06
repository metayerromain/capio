import React, { Component } from 'react';
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
                    <h1 className="logo">Capio</h1>
                    <Menu />
                    <Sl
                        showAl = {this.showAl}
                    />
                </section>
            )
        } else if(this.state.Al) {
            return(
                <section id="alPage">
                    <h1 className="logo">Capio</h1>
                    <Menu />
                    <Al
                        showCon = {this.showCon}
                    />
                </section>
            )
        } else if(this.state.Conclusion) {
            return(
                <section id="alPage">
                    <h1 className="logo">Capio</h1>
                    <Menu />
                    <Conclusion />
                </section>
            )
        }
        
    }
}

export default SlPage;