import React, { Component } from 'react';
import '../../assets/style/Al.scss';

class Al9 extends Component {
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
        const { contents } = this.state;

        return (

            <div id="Al9" className="section grain">
                <div className="container">
                    <div className="row pt-xl pt-down-md">
                        <div className="col-12 col-md-6">
                            <div className="img1 img img-h-1 anim d-down-none"></div>
                        </div>
                    </div>
                </div>
                <div className="container mt-half">
                    <div className="row jc-end">
                        <div className="col-md-6">
                            <div className="blockText animText blockText-down-center">
                                {contents[8] && contents[8].description}                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Al9;