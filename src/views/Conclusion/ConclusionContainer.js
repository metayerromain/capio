import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/MenuContainer';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import '../../assets/style/Conclusion.scss';
import { TimelineMax, Power3 } from 'gsap';

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
            tl.eventCallback("onComplete", function(i){
                if(i === elementToAnim.length - 1){
                    window.location = "/index";
                }
            },[i]);
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
                        Fondamentalement, les humains ont mené une énorme expérience de la vie réelle en enlevant - et puis en réintroduisant - un prédateur d&apos;une grande étendue de terre. Conséquence, tout l&apos;écosystème de la nature sauvage des États-Unis a été modifié par l&apos;expansion rapide des populations de grands ongulés (wapiti, bison, cerf de Virginie, antilope pronghorn, mouton d&apos;Amérique et la chèvre de montagne). 
                        </p>
                    </div>
                    <div className="blockText intro-anim">
                        <p>
                        La réintroduction des loups gris dans le parc national de Yellowstone figure sûrement, symboliquement et écologiquement, parmi les actes les plus importants de conservation de la faune au XXe siècle. Une fois de plus, Yellowstone abrite toutes les espèces indigènes de grands carnivores: grizzlis, ours noirs, lions de montagne et loups. La présence des loups a même modifié substantiellement les comportements des ongulés. 
                        </p>
                    </div>
                    <div className="blockText intro-anim">
                        <p>
                        Au départ, les changements écologiques provoqués par le manque de loups étaient subtils, de sorte qu&apos;ils n&apos;étaient généralement pas remarqués. Mais les résultats de cette expérience de réintroduction réelle indiquent sans ambiguïté que les loups font partie intégrante de l&apos;écosystème. Ils sont certainement essentiels pour restaurer et maintenir l&apos;écologie naturelle de toute la région de Yellowstone.
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
