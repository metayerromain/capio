import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/MenuContainer';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import '../../assets/style/Conclusion.scss';
import { TweenLite, TimelineMax, Linear, Back, Sine, Power3 } from 'gsap';

class ConclusionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        var elementToAnim = document.querySelectorAll('.intro-anim');
        console.log(elementToAnim)
        elementToAnim.forEach((element, i) => {
            var tl = new TimelineMax({delay:i*7});
            // tl.fromTo(advanced, 6.6, {scaleX: 0}, {scaleX: 1, transformOrigin:"left", ease: Power3.easeInOut}, 'start')
            tl.to(element, 1, {autoAlpha:1, ease: Power3.easeInOut}, 'start')
            tl.to(element, .5, {autoAlpha:0}, '6.6')
        });
    }

    render() {
        return(
            <section id="Conclusion">
                <Link to={`/`} className="logo">
                    <h1>Capio</h1>
                </Link>
                <Menu />
                <div className="intro1 section grain">
                    <div className="blockText intro-anim">
                        <p>
                        Fondamentalement, les humains ont mené une énorme expérience de la vie réelle en enlevant - et puis en réintroduisant - un prédateur d'une grande étendue de terre. Conséquence, tout l'écosystème de la nature sauvage des États-Unis a été modifié par l'expansion rapide des populations de grands ongulés (wapiti, bison, cerf de Virginie, antilope pronghorn, mouton d'Amérique et la chèvre de montagne). 
                        </p>
                    </div>
                    <div className="blockText intro-anim">
                        <p>
                        Fondamentalement, les humains ont mené une énorme expérience de la vie réelle en enlevant - et puis en réintroduisant - un prédateur d'une grande étendue de terre. Conséquence, tout l'écosystème de la nature sauvage des États-Unis a été modifié par l'expansion rapide des populations de grands ongulés (wapiti, bison, cerf de Virginie, antilope pronghorn, mouton d'Amérique et la chèvre de montagne). 
                        </p>
                    </div>
                    <div className="blockText intro-anim">
                        <p>
                        Fondamentalement, les humains ont mené une énorme expérience de la vie réelle en enlevant - et puis en réintroduisant - un prédateur d'une grande étendue de terre. Conséquence, tout l'écosystème de la nature sauvage des États-Unis a été modifié par l'expansion rapide des populations de grands ongulés (wapiti, bison, cerf de Virginie, antilope pronghorn, mouton d'Amérique et la chèvre de montagne). 
                        </p>
                    </div>
                </div>
                <Link to={`/index`} className="Conclusion">
                    <p>Lexique</p>
                    <img src={Skip} alt="Skip"></img>
                </Link>
            </section>
        ) 
    }
}

export default ConclusionContainer;
