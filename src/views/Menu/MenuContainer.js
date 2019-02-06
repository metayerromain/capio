import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax, Power3 } from 'gsap';
import MenuSvg from '../../assets/Picto/Burger menu.svg';
import '../../assets/style/Menu.scss';

class MenuContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state= {
            heightMyNav:"0",
        }
    }

    
    openNav(){
        var menuItem = document.querySelectorAll('.anim-menu')
        var timelineMenu = new TimelineMax({paused: true});
        timelineMenu.staggerFromTo(menuItem, .5, {autoAlpha: 0, y: 40 },{autoAlpha:1, y: 0 }, 0.10, '+=.3');
        timelineMenu.play();

        this.setState({
            heightMyNav:"100%"
        })
    }

    closeNav(){
        this.setState({
            heightMyNav:"0%"
        })
    }

    render() {
        const myNavStyle = {
            height: this.state.heightMyNav,
        };
        return(
            <div className="Menu">
                <div id="myNav" className="overlay" style={myNavStyle}>
                    <span className="closebtn" onClick={() => this.closeNav()}>&times;</span>
                    <div className="overlay-content">
                        <Link to={`/choiceAl`} className="link anim-menu">Chapitre 1 : Yellowstone sans les loups</Link>
                        <span className="ligne1 anim-menu"></span>
                        <Link to={`/choiceSl`} className="link anim-menu">Chapitre 2 : Yellowstone avec les loups</Link>
                        <span className="ligne2 anim-menu"></span>
                        <Link to={`/index`} className="link anim-menu">Lexique</Link>
                    </div>
                </div>
                <span onClick={() => this.openNav()} className="openbtn">
                    <img src={MenuSvg} alt="Menu"></img>
                </span>
            </div>
        )
    }
}

export default MenuContainer;