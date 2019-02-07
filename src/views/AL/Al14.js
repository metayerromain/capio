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
        const { contents } = this.state;

        return (

            <div id="Al14" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-0">
                        <div className="col-md-12 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                                {contents[13] && contents[13].title}        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row jc-end mt-md mt-down-0">
                        <div className="col-md-5 zIndex-5">
                            <div className="blockText anim blockText-resp-middle h-50">
                                {contents[13] && contents[13].description}        
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

export default Al14;