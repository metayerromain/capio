import React, { Component } from 'react';


class LexiqueModal extends Component {
    constructor(props) {
      super(props)
      this.state = {
          show: true
      };
    }

    hideModal = () => {
        this.setState({
            show: false
        });
    };

    lexiqueItems = () => {
        var items = this.props.lexiqueObject.map(function(item, index) {
            return(
                <div className="row center-xs">
                    <div key={ index } id="lexique" className="lexique col-xs-4 bg-modal">
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </div>
                </div>
            )
        });
        return items
    }

    render(){
        return(
            this.lexiqueItems()
        )
    }
}

export default LexiqueModal;
