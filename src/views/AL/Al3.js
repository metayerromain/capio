import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al3 extends Component {
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
            <div id="Al3" class="section">
            {contents.map((content) =>
                <div className="blockText" key={content.id}>
                    <p>{content.description}</p>
                </div>
            )}
            {images.map((image) =>
                <div className="img1" key={image.id}>
                    <img src={image.img}></img>
                </div>
            )}
            </div>
        )
    }
}

export default Al3;