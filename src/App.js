import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/homePage';
import AlPage from './views/alPage';
import SlPage from './views/slPage';
import IndexPage from './views/indexPage';


// //import dependencies
import 'flexboxgrid'
import "gsap";

// //import css
import './assets/style/fonts.scss';
import './assets/style/Reset.scss';
import './assets/style/content.scss';
import './assets/style/grain.scss';
import './App.css';

// //import components
// import Home from './views/Home/HomeContainer';
// import Load from './views/Loader/LoaderContainer';
import Choice from './views/Choice/ChoiceContainer';
// import Lexique from './views/Lexique/LexiqueContainer';
// import Quizz from './views/Quizz/QuizzContainer';
// import Test from './views/Test';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log("start render images", this.state.images);
    // console.log("start render content", this.state.contents);


    // const { images, contents } = this.state;
    // console.log("after state images",images);
    // console.log("after state content",contents);


    return (
      // <div>
      //   {/* <Test /> */}
      //   <ul>
      //     {images.map(image =>
      //       <li key={image.id}>
      //         <img alt={image.id} src={image.img}></img>
      //       </li>
      //     )}
      //     {contents.map(content =>
      //       <li key={content.id}>
      //       <p>{content.title}</p>
      //       <p>{content.description}</p>
      //       </li>
      //     )}
      //   </ul>
      // </div>
      <Fragment>
      {/* <Lexique /> */}
        {/* {/* <Load />
        <Home /> */}
        {/* <Choice /> */}
      {/* <Problem/> */}
      <Router>
        <Fragment>
          <Route exact path="/" component={HomePage} />
          <Route path="/choiceAl" component={AlPage} />
          <Route path="/choiceSl" component={SlPage} />
          <Route path="/index" component={IndexPage} />
        </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
