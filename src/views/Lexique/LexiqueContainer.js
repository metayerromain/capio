import React, { Component, Fragment } from 'react';
import LexiqueModal from './LexiqueModal'
import '../../assets/style/Lexique.scss';
import { TweenLite, TimelineMax, Linear, Back, Sine, Power3 } from 'gsap';
import Loader from '../Loader/Loader';


class LexiqueContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      toggle: true,
      lexique: null
    };
    this.datas = [{
        key: 1,
        title: "Le saviez-vous ?",
        content: "Les os de l’aile de l’aigle sont très semblables à ceux de l’humain. Les plumes les plus importantes sur l’aile sont celles du bout, elles lui permettent de voler de façon plus stable dans les grands vents."
      },
      {
        key: 2,
        title: "Le saviez-vous ?",
        content: "Pendant longtemps, partout en Europe, le 2 février était un jour de fête païenne : le Chant de l'Ours. Cette date correspondait à la sortie de tanière du plantigrade, et les européens fêtaient la reprise de ses activités. "
      },
      {
        key: 3,
        title: "Le saviez-vous ?",
        content: "Toute une terminologie permet de distinguer le mâle de la femelle au cours des différents âges de leur vie: le mâle de la naissance à 6 mois est un faon, de 6 mois à 1 an, un hère, de 1 an à 2 ans on le nomme daguet et à partir de 2 ans, il devient cerf. "
      },
      {
        key: 4,
        title: "Le saviez-vous ?",
        content: "Le coyote est un personnage important de nombreux mythes et légendes amérindiennes. Il est décrit comme un personnage rusé, farceur, et parfois sournois, un peu comme le renard dans la culture européenne"
      }, 
      {
        key: 5,
        title: "Le saviez-vous ?",
        content: "Le wapiti a longtemps été considéré comme la plus grande des sous-espèces de cerf élaphe mais les analyses génétiques semblent montrer que le wapiti est plus proche du cerf sika."
      },
      {
        key: 6,
        title: "Le saviez-vous ?",
        content: "Le faucon est considéré comme l'animal le plus rapide du monde. En effet, il atteint 389 kilomètres par heure en piqué, 46 à 110 km/h en vol battu (ou vol ramé) et 90 km/h en vol plané."
      }
    ];
  }

  // const showBox = new TimelineMax();
  // //alias for brevity
  // const sb = showBox;

  // const hb = new TimelineMax(); //hidebox


  showModal = (event, id) => {
    this.setState({ show: true, lexique : this.datas[ id ] });

  };

  onFirstPage = () => {
    this.setState({toggle: true});
  };
  
  outFirstPage = () => {
    this.setState({toggle: false});
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    var elementToAnim = document.querySelectorAll('.intro-anim');
    console.log(elementToAnim)
    elementToAnim.forEach((element, i) => {
      var tl = new TimelineMax({
        delay: i * 7
      });
      // tl.fromTo(advanced, 6.6, {scaleX: 0}, {scaleX: 1, transformOrigin:"left", ease: Power3.easeInOut}, 'start')
      tl.to(element, 1, {
        autoAlpha: 1,
        ease: Power3.easeInOut
      }, 'start')
    });
  }

  render() {
    return (
      <Fragment>
        { this.state.toggle ? 
        <div>
          <div className="bg-black">
            <div className="intro1 section text-center grain">
              <div className="blockText intro-anim">
                <p>
                  Vous avez la possibilité de re-découvrir les definitions de certains termes
                  ou encore les anecedotes que vous avez rencontré au cours de cette experience
                  par le biais d'une carte.
                </p>
                <button 
                  className="button-discover"
                  onClick={() => this.outFirstPage()}
                >
                  Decouvrir le lexique
                </button>
              </div>
            </div>
          </div>
        </div>
       : '' }
       {
         !this.state.toggle ? 
        <div>
          {
            !this.state.toggle ? <div className="map"></div> : ''
          }
          <div className="lexique-container">
            {
              this.state.show ?
              <Fragment>
                <div className="bg-black-opacity"></div>
                <LexiqueModal
                  lexique = { this.state.lexique }
                />
                <div onClick={() => this.hideModal()} className="close"></div>
              </Fragment> : ''
            }
          </div>
            <div id="icon1" data-id="0" onClick={() => this.showModal(null, 0)} className="lexique-icon"></div>
            <div id="icon2" data-id="1" onClick={() => this.showModal(null, 1)} className="lexique-icon"></div>
            <div id="icon3" data-id="2" onClick={() => this.showModal(null, 2)} className="lexique-icon"></div>
            <div id="icon4" data-id="3" onClick={() => this.showModal(null, 3)} className="lexique-icon"></div>
            <div id="icon5" data-id="4" onClick={() => this.showModal(null, 4)} className="lexique-icon"></div>
            <div id="icon6" data-id="5" onClick={() => this.showModal(null, 5)} className="lexique-icon"></div>
          </div>
         : ''
       }
      </Fragment>
    );
  }
}

export default LexiqueContainer;
