import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al2 extends Component {
    constructor(props) {
        super(props)

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
        // const { contents, images } = this.state;
        return (

            // <div id="Al2" className="section">
            // {contents.map((content) =>
            //     <div className="blockText" key={content.id}>
            //         <p>{content.description}</p>
            //     </div>
            // )}
            // {contents.map((content) =>
            //     <div className="blockText2" key={content.id}>
            //         <p>{content.description}</p>
            //     </div>
            // )}
            // {images.map((image) =>
            //     <div key={image.id} className="img1">
            //         <img src={image.img}></img>
            //     </div>
            // )}
            //     <div className="img2"></div>

            <div id="Al2" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                                Les loups sont des prédateurs de premier plan qui ont des effets bénéfiques de grande envergure sur des écosystèmes entiers - y compris la structure des rivières.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row jc-end mt-md mt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                                Dès que les loups ont été réintroduits dans le parc, même en petit nombre, l’impact fut spectaculaire. Les influences bénéfiques des loups réintroduits sont devenues presque immédiatement apparentes.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 img-h-2 zIndex-2 mt-down-md img anim d-down-none"></div>
                <div className="img2 img-h-2 zIndex-3 mt-down-md img anim d-down-none"></div>
            </div>
        )
    }
}

export default Al2;