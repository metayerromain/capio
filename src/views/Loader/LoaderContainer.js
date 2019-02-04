import React, { Component } from 'react';
import Loader from './Loader';
import '../../assets/style/Loading.scss';

class LoaderContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state= {
            numLoad: 0,
        }
    }

    loading = () => {
        let bgLoading = document.getElementById('bgLoading');
        let loading = document.getElementById('Loading');

        bgLoading.style.opacity = 1;

        if (this.state.numLoad <= 99) {
            this.setState({
                numLoad: this.state.numLoad +1,
            })
        } else {
            this.setState({
                numLoad: 100
            })
            loading.style.opacity = 0;
        }
    }

    componentDidMount() {
        setInterval(() => this.loading(), 60)
    }

    render() {
        return(
            <Loader
                loading={this.loading }
                numLoad={this.state.numLoad }
            />
        )
    }
}

export default LoaderContainer;