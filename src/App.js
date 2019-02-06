import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/Reset.scss';
import HomePage from './views/homePage';
import AlPage from './views/alPage';
import SlPage from './views/slPage';
import LexiquePage from './views/lexiquePage';

//import dependencies
import 'flexboxgrid'
import "gsap";

//import css
import './assets/style/fonts.scss';
import './assets/style/Reset.scss';
import './assets/style/content.scss';
import './assets/style/grain.scss';

// //import components
// import Home from './views/Home/HomeContainer';
// eslint-disable-next-line
// import Load from './views/Loader/LoaderContainer';
// import Choice from './views/Choice/ChoiceContainer';
// import Lexique from './views/Lexique/LexiqueContainer';
// eslint-disable-next-line
// import Test from './views/Test';
// import Load from './views/Loader/LoaderContainer';
// import Choice from './views/Choice/ChoiceContainer';
// import Quizz from './views/Quizz/QuizzContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

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
      // <Load />
      // <Home />
      // <Choice />
      // <Problem/>
      //   <Lexique />
      // </div>
      <Router>
          <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/choiceAl" component={AlPage} />
            <Route path="/choiceSl" component={SlPage} />
            <Route path="/index" component={LexiquePage} />
          </Fragment>
        </Router>

      // <div>
      //   {/* <Test /> */}
      //   {/* <ul>
      //     {images.map(image =>
      //       <li key={image.id}>
      //         <img src={image.img}></img>
      //       </li>
      //     )}
      //     {contents.map(content =>
      //       <li key={content.id}>
      //       <p>{content.title}</p>
      //       <p>{content.description}</p>
      //       </li>
      //     )}
      //   </ul> */}
      //   {/* <Load />
      //   <Home /> 
      //   <Choice />
      //   <Quizz  question={'À ton avis, que chassent les loups ?'}
      //           goodAnswer={'wapitis'}
      //           badAnswer={['ours','canards']}
      //           image={'/images/loup_small_thumbnail.svg'} /> */}
      //   {/* <Problem/> */}
      // </div>
    );
  }
}

export default App;
