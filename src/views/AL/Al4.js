import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al4 extends Component {
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
            <div id="Al4" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0 jc-end">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-down-center mt-down-0">
                            Bien entendu au début, ils tuèrent certains <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>cerfs </span> mais ils changèrent également le comportement de ces cerfs, de manière plus profonde. Les cerfs commencèrent à éviter certaines parties du parc afin de fuir les loups. En particulier, les gorges et les vallées.                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-2 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-2 zIndex-3 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al4;