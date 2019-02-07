import React, { Component } from 'react';

class Intro1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return(
            <div className="intro1 section">
                <div className="advanced"></div>
                <div className="intro-anim">
                    L’une des plus fascinantes découvertes scientifiques de ces 50 dernières années a été la découverte de transfert de cascade à grande échelles. 
                </div>
                <div className="intro-anim">
                    Le transfert en cascade d’un processus écologique qui part du sommet de la chaine alimentaire pour se répercuter tout en bas.
                </div>
                <div className="intro-anim">
                    L’un des exemples les plus représentatifs est ce qui s’est produit au parc national de Yellowstone
                </div>
                <div className="intro-anim">
                    En 1995, 14 loups ont été réintroduits dans cet immense espace vert, connu pour son volcan et très apprécié des grimpeurs.
                </div>
                <div className="intro-anim">
                    Avec l’espèce, c’est en fait toute une faune et une flore qui ont été réintroduite. 
                </div>
                <div className="intro-anim">
                    Ce qui a donné aux biologistes une occasion unique d&apos;étudier ce qui se passe lorsqu&apos;un prédateur supérieur retourne à un écosystème.
                </div>
                <div className="intro-anim">
                    Et si, nous aussi, nous faisions l’expérience de retirer le loup puis de le réintroduire au sein de Yellowstone ? 
                </div>
            </div>
        ) 
    }
}

export default Intro1;