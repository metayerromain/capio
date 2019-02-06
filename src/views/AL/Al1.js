import React, { Component } from 'react';
import '../../assets/style/Al.scss';
import '../../assets/style/swiper.scss';
import Swiper from 'react-id-swiper';

class Al1 extends Component {
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
        this.state = {
            contents: [],
            images: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8888/capio/api/content/read.php')
        .then(response => response.json())
        .then(data => this.setState({ contents: data.contents }));

        fetch('http://localhost:8888/capio/api/images/read.php')
        .then(response => response.json())
        .then(data => this.setState({ images: data.images }));
  
    }

    render () {
        // console.log('before render', contents);
        // const { contents, images } = this.state;
        // console.log('after state', contents);


        // return (
            
        //     <div id="Al1" className="section">
        //     {contents.map((content) =>
        //         <div key={content.id} className="blockText">
        //             <p>{content.description}</p>
        //         </div>
        //     )}
        //     {images.map((image) =>
        //         <div key={image.id} className="img1"><img src={image.img}></img></div>
        //         )}
        //         <div className="img2"></div>
        //         <div className="img3"></div>
              
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
                        <div className="mt-sm img-h-1 col-12 img anim" style={{backgroundImage: 'url(' + "castor1.jpg" + ')'}}></div>
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