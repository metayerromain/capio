import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al14 extends Component {
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
        const { contents, images } = this.state;

        return (
            <div id="Al14" class="section">
                {contents.map((content) =>
                    <div className="blockText" key={content.id}>
                        <p>{content.description}</p>
                    </div>
                 )}
                <div className="blockText2">
                    <p>Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres ! </p>
                </div>
                {images.map((image) =>
                    <div key={image.id} className="img1">
                        <img src={image.img}></img>
                    </div>
                )}  
                <div className="img2"></div>
            </div>
        )
    }
}

export default Al14;