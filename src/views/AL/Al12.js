import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al12 extends Component {
    constructor(props) {
        super(props)
        this.el = document.querySelector('.modal');

        this.state = {
            
        }
    }

    displayModal = ( event )=>
    {   
        var indexEl = event.target.getAttribute('data-id');
        var el = this.el;
        el.style.top = event.pageY +"px";
        el.style.left = event.pageX  +"px";
        el.style.visibility = "visible";
        el.innerHTML = "<div class='modal-title'>"+this.props.lexique[indexEl].title +"</div>" + "<div class='modal-content'>"+this.props.lexique[indexEl].content+"</div>";
    }

    hideModal = ( event ) =>
    {
        this.el.style.visibility = "hidden";
        this.setState = {
            contents: []
        }
    }
    render () {

        return (
            <div id="Al12" className="section grain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText right-block">
                    La population des <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>ours </span> a commencé à augmenter en raison de l’augmentation des baies sur les nouveaux arbustes. Les ours ont accentué la pression des loups en tuant quelques faons.
                </div>
            </div>
        )
    }
}

export default Al12;