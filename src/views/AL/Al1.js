import React, { Component } from 'react';
import '../../assets/style/Al.scss';
import '../../assets/style/swiper.scss';
import Swiper from 'react-id-swiper';

import Lexique from '../lexique';

import '../../assets/img/1 AL/fond1.jpg';

class Al1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
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
            <div id="Al1" className="section grain">
                <Lexique 
                    lexiqueObject={[{title:'titre1', content:'contenu1'},
                    {title:'titre2', content:'contenu2'}
                    ]}
                />
                <div className="container pt-xl">
                    <div className="row">
                        <div className="col-12 col-md-8 container">
                            <div className="blockText animText">
                                Nous savons <span className="lexique-word">tous</span> que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres !
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-md">
                    <div className="jc-around">
                    <Swiper {...params}>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/1 AL/fond1.jpg") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/1 AL/fond1.jpg") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/1 AL/fond1.jpg") + ')'}}></div>
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + require("../../assets/img/1 AL/fond1.jpg") + ')'}}></div>
                    </Swiper>

                    </div>
                </div>
            </div>
        )
    }
}

export default Al1;