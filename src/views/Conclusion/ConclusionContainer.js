import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/MenuContainer';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import '../../assets/style/Conclusion.scss';

class ConclusionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <section id="Conclusion">
                <Link to={`/`} className="logo">
                    <h1>Capio</h1>
                </Link>
                <Menu />
                <div className="intro1 section">
                    <p className="intro-anim">
                    Fondamentalement, les humains ont mené une énorme expérience de la vie réelle en enlevant - et puis en réintroduisant - un prédateur d'une grande étendue de terre. Conséquence, tout l'écosystème de la nature sauvage des États-Unis a été modifié par l'expansion rapide des populations de grands ongulés (wapiti, bison, cerf de Virginie, antilope pronghorn, mouton d'Amérique et la chèvre de montagne). 
                    </p>
                    <p className="intro-anim">
                    La réintroduction des loups gris dans le parc national de Yellowstone figure sûrement, symboliquement et écologiquement, parmi les actes les plus importants de conservation de la faune au XXe siècle. Une fois de plus, Yellowstone abrite toutes les espèces indigènes de grands carnivores: grizzlis, ours noirs, lions de montagne et loups. La présence des loups a même modifié substantiellement les comportements des ongulés. 
                    </p>
                    <p className="intro-anim">
                    Au départ, les changements écologiques provoqués par le manque de loups étaient subtils, de sorte qu'ils n'étaient généralement pas remarqués. Mais les résultats de cette expérience de réintroduction réelle indiquent sans ambiguïté que les loups font partie intégrante de l'écosystème. Ils sont certainement essentiels pour restaurer et maintenir l'écologie naturelle de toute la région de Yellowstone.
                    </p>
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
