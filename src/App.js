import React, { Component } from 'react';

//import dependencies
import 'flexboxgrid'
import "gsap";

//import css
import './assets/style/fonts.scss';
import './assets/style/Reset.scss';
import './assets/style/content.scss';
import './assets/style/grain.scss';

//import components
// import Home from './views/Home/HomeContainer';
// eslint-disable-next-line
import Load from './views/Loader/LoaderContainer';
import Choice from './views/Choice/ChoiceContainer';
import Lexique from './views/Lexique/LexiqueContainer';
// eslint-disable-next-line
import Test from './views/Test';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      contents:[],
    };
 
  }

 
  componentDidMount(){


    fetch('http://localhost:8888/capio/api/images/read.php')
    .then(response => response.json())
    // .then(data => {
    //     console.log(data);
  
    //   })
    .then(data => this.setState({ images: data.images }));


    fetch('http://localhost:8888/capio/api/content/read.php')
    .then(response => response.json())
    .then(data => this.setState({ contents: data.contents }));
            
  }
 

  render() {
    console.log("start render images", this.state.images);
    console.log("start render content", this.state.contents);


    const { images, contents } = this.state;
    console.log("after state images",images);
    console.log("after state content",contents);



    return (
      <div>
        {/* <Test /> */}
        <ul>
          {images.map(image =>
            <li key={image.id}>
              <img alt={image.id} src={image.img}></img>
            </li>
          )}
          {contents.map(content =>
            <li key={content.id}>
            <p>{content.title}</p>
            <p>{content.description}</p>
            </li>
          )}
        </ul>
        {/* <Load />
        <Home />  */}
        <Choice />
        {/* <Problem/> */}
        <Lexique />
      </div>
    );
  }
}

export default App;
