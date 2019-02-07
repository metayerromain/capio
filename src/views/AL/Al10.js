import React, { Component } from 'react';
import '../../assets/style/Al.scss';
import '../../assets/style/swiper.scss';
import Swiper from 'react-id-swiper';

class Al10 extends Component {
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

        const params = {
            slidesPerView: 3,
            spaceBetween: 100,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination.anim',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
          }
        return (
            <div id="Al10" className="section grain">
                <div className="container pt-xl">
                    <div className="row">
                        <div className="col-12 col-md-8 container">
                            <div className="blockText animText">
                                Parce que les loups tuent les prédateurs des <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>lapins </span> et des <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>souris </span>, la population des rongeurs a augmenté. Un délice que n’a pas tardé à engloutir les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>aigles </span>, les <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>corbeaux </span>, <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>lynx </span>, <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>belettes </span>, <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>scarabées </span>, et autres charognards.Les carcasses sont aussi bénéfiques pour les sols. Elles apportent des nutriments comme l’azote.                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-md">
                    <div className="jc-around">
                    <Swiper {...params}>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/10 AL/aigle1.jpg") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/10 AL/lynx1.jpg") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/10 AL/scarabe1.jpg") + ')'}}></div>
                    </Swiper>

                    </div>
                </div>
            </div>
        )
    }
}

export default Al10;