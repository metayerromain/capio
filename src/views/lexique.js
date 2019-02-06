import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Lexique extends Component {
    constructor(props){
      super(props)
      this.over = document.querySelectorAll('.lexique-word');
      this.state={
        toOver: []
      }
    }


    componentWillMount(){
        // this.setState({
        //     toOver : over
        // })
    }

    lexiqueItems = () => {
        // console.log(this.state.toOver)
        if( this.props.lexiqueObject )
        {
            var items = this.props.lexiqueObject.map(function(item, index){
                return ReactDOM.createPortal(
                    <div key={ index } id="lexique" className="lexique">

                    </div>,
                    document.querySelector('.lexique-word')
                )
            });
            return items

        }
    }

    render(){
        return(
            this.lexiqueItems()
        )
    }
}

export default Lexique;