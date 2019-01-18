import React, { Component } from 'react';
import Home from './Home';


class HomeContainer extends Component {

  state = {
    text : "HomePage works !"
  }

  render() {
    return (
      <Home
        text = {this.state.text}
      />
    );
  }

}

export default HomeContainer;
