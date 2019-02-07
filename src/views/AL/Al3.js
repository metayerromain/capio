import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al3 extends Component {
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

            <div id="Al3" className="section grain">
                <div className="container-fluid">
                    <div className="row jc-end">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    Puisqu'ils sont des prédateurs qui chassent principalement des ongulés malades et vieillissants - particulièrement les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>wapitis </span>, dont les populations ont explosé à Yellowstone - les loups ont arrêté l'expansion de ces populations d'herbivores tout en améliorant leur santé globale.
                </div>
            </div>
        )
    }
}

export default Al3;
