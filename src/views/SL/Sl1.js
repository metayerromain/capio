import React, { Component } from 'react';
import '../../assets/style/Sl.scss';
import '../../assets/style/swiper.scss';
import Swiper from 'react-id-swiper';

import '../../assets/img/1 AL/fond1.jpg';

class Sl1 extends Component {
    constructor(props) {
        super(props)
        this.el = document.querySelector('.modal');
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
            <div id="Sl1" className="section grain">
                <div className="container pt-xl">
                    <div className="row">
                        <div className="col-12 col-md-8 container">
                            <div className="blockText animText">
                                Nous savons <span data-id="0" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal }>tous</span> que les loups tuent différentes espèces d’animaux mais nous <span data-id="1" className="lexique-word" onMouseEnter={ this.displayModal } onMouseLeave={ this.hideModal  }>sommes</span> moins au courant qu’ils ont donné la vie à beaucoup d’autres !
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-md">
                    <div className="jc-around">
                    <Swiper {...params}>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/SL/sl1_first.png") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/SL/sl1_second.png") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/SL/sl1_third.jpg") + ')'}}></div>
                    </Swiper>

                    </div>
                </div>
            </div>
        )
    }
}

export default Sl1;
