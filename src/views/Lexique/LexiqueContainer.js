import React, { Component } from 'react';
// import Lexique from './Lexique';
import LexiqueModal from '../LexiqueModal'
import '../../assets/style/Lexique.scss';

class LexiqueContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      show: false 
    };  
  }

  data = {
    title: {
      "title1": "La reproduction recreative des chevres",
      "title2": "Le fromage de chevre"
    },
    content: {
      "content1": "this is content",
      "content2": "La reproduction recreative des loups en procreation cognitive"
    }
  }

  showModal = () => {
    this.setState({ show: true });
    return this.modalContent();
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  modalContent = () => {
    console.log(this.state.show);
  }

  render() {
    return (
      <div>
        <div className="lexique-container">
          {
          this.state.show ?
          <LexiqueModal
            lexiqueObject = {
              [
                {
                  title: "La reproduction recreative des chevres",
                  content: "La reproduction recreative des chevres des chevres des chevres"
                },
                {
                  title: "La reproduction recreative des chevres",
                  content: "La reproduction recreative des chevres des chevres des chevres"
                }
              ]
            }/> : ''
          }
        </div>
        <div className="map1"></div>
        <div id="icon1" onClick={() => this.showModal()} className="lexique-icon"></div>
        <div id="icon2" onClick={() => this.showModal()} className="lexique-icon"></div>
        <div id="icon3" onClick={() => this.showModal()} className="lexique-icon"></div>
      </div>
    );
  }
}

export default LexiqueContainer;
