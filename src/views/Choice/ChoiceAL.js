import React, { Component } from 'react';
import { TimelineMax, Power3 } from 'gsap';
import ReactFullpage from "@fullpage/react-fullpage";
import Sound from 'react-sound';

import Al1 from '../AL/Al1';
import Al2 from '../AL/Al2';
import Al3 from '../AL/Al3';
import Al4 from '../AL/Al4';
import Al5 from '../AL/Al5';
import Al6 from '../AL/Al6';
import Al7 from '../AL/Al7';
import Al8 from '../AL/Al8';
import Al9 from '../AL/Al9';
import Al10 from '../AL/Al10';
import Al11 from '../AL/Al11';
import Al12 from '../AL/Al12';
import Al13 from '../AL/Al13';
import Al14 from '../AL/Al14';
import Quizz1 from '../AL/Quizz1';
import Quizz2 from '../AL/Quizz2';
import Quizz3 from '../AL/Quizz3';
import Quizz4 from '../AL/Quizz4';
import Quizz5 from '../AL/Quizz5';
import Quizz6 from '../AL/Quizz6';
import Quizz7 from '../AL/Quizz7';
import Quizz8 from '../AL/Quizz8';
import Quizz9 from '../AL/Quizz9';
import Quizz10 from '../AL/Quizz10';
import Quizz11 from '../AL/Quizz11';
import Quizz12 from '../AL/Quizz12';
import Quizz13 from '../AL/Quizz13';

class ChoiceAL extends Component {

    render(){
        const FullpageWrapper = fullpageProps => (
        <ReactFullpage
            {...fullpageProps}
            callbacks= {["afterLoad", "onLeave"]}
            parallax={true}
                render={({ state, props }) => {
                    
                    if(state.initialized){
                        var elementToAnim = document.querySelectorAll('.active .anim');
                        var textToAnim = document.querySelectorAll('.active .animText');

                        var timeline = new TimelineMax({paused: true});
                        timeline.staggerFromTo(textToAnim, .5, {autoAlpha: 0, y: 40 },{autoAlpha:1, y: 0 }, 0.30);
                        timeline.staggerFromTo(elementToAnim, .5, { autoAlpha: 0, y: 40}, {autoAlpha: 1, y: 0, ease: Power3.easeInOut}, .15, "start");

                        timeline.play();
                        
                        
                        if(state.callback === "onLeave"){
                            timeline.reverse().delay(2);
                        }
                    }

                    return(
                        <section id="fullpage-wrapper">
                            <Sound
                            url="ambiance.mp3"
                            playStatus={Sound.status.PLAYING}
                            playFromPosition={50000 /* in milliseconds */}
                            onLoading={this.handleSongLoading}
                            onPlaying={this.handleSongPlaying}
                            onFinishedPlaying={this.handleSongFinishedPlaying}
                            />
                            <Al1 />
                            <Quizz1 />
                            <Al2 />
                            <Quizz2 />
                            <Al3 lexique={[{title:'Le savais-tu ?', content:'Le wapiti a longtemps été considéré comme la plus grande des sous-espèces de cerf élaphe mais les analyses génétiques semblent montrer que le wapiti est plus proche du cerf sika.'}]}/>
                            <Quizz3 />
                            <Al4 lexique={[{title:'La petite anecdote', content:"Toute une terminologie permet de distinguer le mâle de la femelle au cours des différents âges de leur vie: le mâle de la naissance à 6 mois est un faon, de 6 mois à 1 an, un hère, de 1 an à 2 ans on le nomme daguet et à partir de 2 ans, il devient cerf. "}]}/>
                            <Al5 />
                            <Quizz4 />
                            <Quizz5 />
                            <Al6 />
                            <Quizz6 />
                            <Al7 lexique={[{title:'Raconte nous une histoire', content:"Le castor n'est aujourd'hui plus consommé, mais il l'était au Moyen-Âge. Les chrétiens étaient même autorisés à en manger le vendredi (jour où l'on ne mangeait pas de viande), car sa chair était assimilée à celle du poisson en raison de la vie aquatique de l'animal."}]}/>/>
                            <Quizz7 />
                            <Al8 lexique={[{title:'Le savais-tu ?', content:'Pour rester proche l’une de l’autre quand elles entament leur sommeil à la surface de l’eau, les loutres de mer se tiendraient par la patte pour ne pas partir à la dérive et se perdre de vue. Un tableau attendrissant qui en fera fondre plus d’un !'}, {title:'Le savais-tu ?', content:"Le corps de la femelle ragondin s'est bien adapté au milieu aquatique. En effet, les mamelles ont migré du milieu du ventre vers le côté ce qui lui permet d'allaiter ses petits pendant la nage. "},{title:'Un animal, une expression !', content:'Faire le canard : se dit d&apos;un individu adoptant, d&apos;une manière générale ou lors d&apos;une situation particulière, une attitude effacée voire totalement soumise. « Faire le canard » peut ainsi s&apos;employer de la même manière que « faire profil bas » ou « ne pas faire de vague »'}]}/>
                            <Al9 />
                            <Al10 lexique={[{title:'La petite anecdote', content:"Les lapins ont une vue spéciale qu'il est important de noter. Leurs sens sont excellents, bien que la vue est le sens le plus développé de tous. Ils ont une vue panoramique à quasi 360º."}, {title:'La petite anecdote', content:"En Chine, le rat (ou souris) est un signe d'astrologie chinoise, il est décrit comme étant ambitieux, charmeur, imaginatif et passionné. C'est l'un des signes favorables : celui de l'abondance."},{title:'La petite anecdote', content:"Les os de l’aile de l’aigle sont très semblables à ceux de l’humain. Les plumes les plus importantes sur l’aile sont celles du bout, elles lui permettent de voler de façon plus stable dans les grands vents."},{title:'La petite anecdote', content:"La légende veut que l’hermine préfère êtretuée par un renard que de souiller son pelage en s’enfuyant par une mare boueuse.« Plutôt mourir qu’être souillée », la devise tirée de cette légende, est devenue celle des ducs de Bretagne. "},{title:'A retenir', content:"Il se trouve que les corbeaux font entre eux des signaux non-vocaux extrêmement sophistiqués. Alors que la majorité des oiseaux communiquent vocalement (en chantant ou en piaillant) pour s’envoyer des informations simples (défense du territoire ou parade nuptiale), les corbeaux sont capables de faire des gestes pour communiquer, comme une sorte de langue des signes."},{title:'Un animal, une expression !', content:"L'expression 'avoir des yeux de lynx' désigne le fait d'avoir une vue très perçante. Elle ne fait aucunement référence à l'animal du même nom, mais est tirée du personnage mythologique Lyncée, héros qui avait le pouvoir de voir à travers les murs."},{title:'Le savais-tu ?', content:"L'insecte le plus fort au monde au vu de sa taille est le scarabée bousier mâle : il est en effet capable de tirer 1141 fois sa propre masse corporelle. Si un être humain moyen pesant 70 kilos avait la même capacité, il pourrait tirer 12 éléphants d'Asie."}]}/>
                            <Quizz8 />
                            <Quizz9 />
                            <Al11 lexique={[{title:'Le savais-tu ?', content:"Le coyote est un personnage important de nombreux mythes et légendes amérindiennes. Il est décrit comme un personnage rusé, farceur, et parfois sournois, un peu comme le renard dans la culture européenne"}, {title:'Le savais-tu ?', content:"Le faucon est considéré comme l'animal le plus rapide du monde. En effet, il atteint 389 kilomètres par heure en piqué, 46 à 110 km/h en vol battu (ou vol ramé) et 90 km/h en vol plané."},{title:'Le savais-tu ?', content:"Le mulotage est une technique de chasse utilisée par les renards. Elle consiste à sauter à pieds joints et à retomber pattes en avant sur sa proie (généralement un rongeur)."}]}/>
                            <Quizz10 />
                            <Quizz11 />
                            <Al12 lexique={[{title:'Le savais-tu ?', content:"Pendant longtemps, partout en Europe, le 2 février était un jour de fête païenne : le Chant de l'Ours. Cette date correspondait à la sortie de tanière du plantigrade, et les européens fêtaient la reprise de ses activités. "}]}/>
                            <Al13 />
                            <Quizz12 />
                            <Quizz13 />
                            <Al14 />
                        </section>
                    )
                }}
            />
        );

        return (
            <div>
                <FullpageWrapper {...this.state}/>
            </div>
        )
    }
}

export default ChoiceAL;
