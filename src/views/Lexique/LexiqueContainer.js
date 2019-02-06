import React, { Component, Fragment } from 'react';
import LexiqueModal from './LexiqueModal'
import '../../assets/style/Lexique.scss';

class LexiqueContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      lexique: null
    };
    this.datas = [{
        key: 1,
        title: "La reproduction recreative des chevres",
        content: "La chevres des chevres des chevres"
      },
      {
        key: 2,
        title: "Le saviez-vous ?",
        content: "Pendant longtemps, partout en Europe, le 2 février était un jour de fête païenne : le Chant de l'Ours. Cette date correspondait à la sortie de tanière du plantigrade, et les européens fêtaient la reprise de ses activités. "
      },
      {
        key: 3,
        title: "Le saviez-vous ?",
        content: "Le wapiti a longtemps été considéré comme la plus grande des sous-espèces de cerf élaphe mais les analyses génétiques semblent montrer que le wapiti est plus proche du cerf sika."
      },
      {
        key: 4,
        title: "Le saviez-vous ?",
        content: "Chevres"
      }, 
      {
        key: 5,
        title: "Le saviez-vous ?",
        content: "Chevres"
      }
    ];
  }

  showModal = (event, id) => {
    this.setState({ show: true, lexique : this.datas[ id ] });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div className="map"></div>
        <div className="lexique-container">
          {
            this.state.show ?
            <Fragment>
              <div className="bg-black"></div>
              <LexiqueModal
                lexique = { this.state.lexique }
              />
              <div onClick={() => this.hideModal()} className="close"></div>
            </Fragment> : ''
          }
        </div>

        }
        <div id="icon1" data-id="0" onClick={() => this.showModal(null, 0)} className="lexique-icon"></div>
        <div id="icon2" data-id="1" onClick={() => this.showModal(null, 1)} className="lexique-icon"></div>
        <div id="icon3" data-id="2" onClick={() => this.showModal(null, 2)} className="lexique-icon"></div>
        <div id="icon4" data-id="3" onClick={() => this.showModal(null, 3)} className="lexique-icon"></div>
        <div id="icon5" data-id="4" onClick={() => this.showModal(null, 4)} className="lexique-icon"></div>
      </div>
    );
  }
}

export default LexiqueContainer;
