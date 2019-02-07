import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al6 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contents: [],
            images: []
        }
    }
    componentDidMount() {
        fetch('http://capio.local:8888/api/content/read.php')
        .then(response => response.json())
        .then(data => this.setState({ contents: data.contents }));

        fetch('http://capio.local:8888/api/images/read.php')
        .then(response => response.json())
        .then(data => this.setState({ images: data.images }));
  
    }

    render () {
        const { contents, images } = this.state;

        return ( 
            <div id="Al6" className="section grain">
                <div className="container">
                    <div className="row jc-end">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim d-down-none"></div>
                        </div>
                    </div>
                </div>
                <div className="blockText middle-block animText">
                    {contents[5] && contents[5].description}                
                </div>
            </div>
        )
    }
}

export default Al6;