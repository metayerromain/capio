import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/style/Reset.scss';
import HomePage from './views/homePage';
import AlPage from './views/alPage';
import SlPage from './views/slPage';
import IndexPage from './views/indexPage';

class App extends Component {

  render() {
    return (
      <Router>
          <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/choiceAl" component={AlPage} />
            <Route path="/choiceSl" component={SlPage} />
            <Route path="/index" component={IndexPage} />
          </Fragment>
        </Router>
    );
  }
}

export default App;
