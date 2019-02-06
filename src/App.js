import React, { Component } from 'react';
import './assets/style/Reset.scss'
import ReactDOM from 'react-dom';
import {TweenLite} from "gsap/TweenMax";
import * as ScrollMagic from 'scrollmagic'
import Home from './views/Home/HomeContainer';
import Load from './views/Loader/LoaderContainer';
import Choice from './views/Choice/ChoiceContainer';
import Quizz from './views/Quizz/QuizzContainer';

// import Test from './views/Test';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
 
  }

 
  componentDidMount(){
    // var anim = ReactDOM.findDOMNode(this).querySelector('.anim');
    // this.myTween = TweenLite.fromTo(anim, 1, { y: 100}, {y:0});

    // fetch('http://localhost:8888/capio/api/images/read.php')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
  
    //   })
    // .then(data => this.setState({ images: data.images }));


    // fetch('http://localhost:8888/capio/api/content/read.php')
    // .then(response => response.json())
    // .then(data => this.setState({ contents: data.contents }));

            
  }

  render() {
    // console.log("start render images", this.state.images);
    // console.log("start render content", this.state.contents);


    // const { images, contents } = this.state;
    // console.log("after state images",images);
    // console.log("after state content",contents);



    return (
      <div>
        {/* <Test /> */}
        {/* <ul>
          {images.map(image =>
            <li key={image.id}>
              <img src={image.img}></img>
            </li>
          )}
          {contents.map(content =>
            <li key={content.id}>
            <p>{content.title}</p>
            <p>{content.description}</p>
            </li>
          )}
        </ul> */}
        <Load />
        <Home /> 
        <Choice />
        <Quizz  question={'À ton avis, que chassent les loups ?'}
                goodAnswer={'wapitis'}
                badAnswer={['ours','canards']}
                image={'/images/loup_small_thumbnail.svg'} />
        {/* <Problem/> */}
      </div>
    );
  }
}

export default App;
