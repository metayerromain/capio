import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/Choice.scss';

class Choice extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    render() {
        return(
            <section id="choices" className="section">
                <Link to={`/choiceAl`} className="buttonAl">
                    <p>Yellowtone <br /> avec les loups</p>
                </Link>
                <Link to={`/choiceSl`} className="buttonSl">
                    <p>Yellowtone <br /> sans les loups</p>
                </Link>
            </section>
        )
    }
}

export default Choice;
