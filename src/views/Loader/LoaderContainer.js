import React, { Component } from 'react';
import Loader from './Loader';
import '../../assets/style/Loading.scss';

class LoaderContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state= {
            numLoad: 0,
            intervalId:"",
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => this.loading(), 60);

        this.setState({
            intervalId: intervalId,
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    loading = () => {
        let bgLoading = document.getElementById('bgLoading');
        let loading = document.getElementById('Loading');

        if (this.state.numLoad <= 99) {
            this.setState({
                numLoad: this.state.numLoad +1,
            })
            bgLoading.style.opacity = 1;
        } else {
            this.setState({
                numLoad: 100
            })
            loading.style.opacity=0;
            setTimeout(function(){ loading.style.display="none"; }, 1800)
        }
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