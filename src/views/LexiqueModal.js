import React, { Component } from 'react';


class LexiqueModal extends Component {

  constructor(props) {
    super(props)
  }

  lexiqueItems = () => {
    return(
      <div className="row center-xs">
        <div id="lexique" className="lexique col-xs-10 bg-modal">
          <h1 className="lexique-title">
            {this.props.lexique.title}
          </h1>
          <p className="lexique-description">
            {this.props.lexique.content}
          </p>
        </div>
      </div>
    )
  }

  render(){
    return(
      this.lexiqueItems()
    )
  }
}

export default LexiqueModal;
