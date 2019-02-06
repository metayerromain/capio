import React, { Component } from 'react';
import '../assets/style/Al.scss';

class Api extends Component {
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
        console.log('before render', contents);
        const { contents, images } = this.state;
        console.log('after state', contents);


        return (
            
            <div id="Al1" className="section">
            {contents.map(content =>
                <div className="blockText">
                    <p>{content.description}</p>
                </div>
            )}
            {images.map(image=>
                <div className="img1"><img src={image.img}></img></div>
                )}
                <div className="img2"></div>
                <div className="img3"></div>
              
            </div>
        )
    }
}

export default Api;