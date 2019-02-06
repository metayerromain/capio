import React, { Component } from 'react';


class Lexique extends Component {
    constructor(props){
      super(props)
    }

    lexiqueItems = () => {
        var items = this.props.lexiqueObject.map(function(item, index){
            return(
                <div key={ index } id="lexique" className="lexique">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
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

export default Lexique;
