import React, { Component } from 'react';
import '../../assets/style/Quizz.scss';
// import Quizz from './Quizz';


class QuizzContainer extends Component {
    constructor(props) {
        super(props);
        // this.inputRef = React.createRef();
        // // const ref = React.createRef();
        // this.checkAnswer = this.checkAnswer.bind(this);
        this.state = {
            displayQuestions: true,
            displayRight: false,
            displayWrong: false

        }
     }

    checkAnswer = (e) => {
        console.log('zbeu', e.target.value)
        if (e.target.value === this.props.goodAnswer){
            console.log('bonne rep')
            this.setState({
                displayQuestions:false,
                displayRight:true,
                displayWrong: false
            })
        } else {
            console.log('mauvaise rep')
            this.setState({
                displayQuestions:false,
                displayRight:false,
                displayWrong: true
            })
        }

    }
    
    render() {
    //     if (this.state.displayQuestions && this.state.displayRight && this.state.displayWrong ) {
    //         return(
    //             <div className="quizzContainer">
    //                 <p className="quizzQuestion">{this.props.question}</p>
    //                 <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.badAnswer[0]} ref={this.inputRef} autoFocus/>
    //                 <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.badAnswer[1]} ref={this.inputRef} autoFocus />
    //                 <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.goodAnswer} ref={this.inputRef} autoFocus/>
    //             </div> 
    //         )
    //     } else if (!this.state.displayQuestions && !this.state.displayRight && this.state.displayWrong) {
    //         return(
    //             <div className="quizzContainer">
    //                 <p className="quizzWrong_title">Mauvaise reponse </p>
    //             </div> 
    //         )
    //     } else if(!this.state.displayQuestions && this.state.displayRight && !this.state.displayWrong) {
    //         return(
    //             <div className="quizzContainer">
    //                 <p className="quizzWrong_title">Bonne reponse </p>
    //             </div>
    //         )
    //     }
    if (!this.state.displayQuestions && this.state.displayRight && !this.state.displayWrong ) {
        return(
            <div className="quizzContainer">
                <p className="quizzQuestion">{this.props.question}</p>
                <p className="answerTitle">Bonne réponse !</p>
                <p className="answerText">{this.props.goodAnswer} est bien la proie du loup.</p>
                <img src={this.props.image}></img>
            </div>
        )
    } else if (!this.state.displayQuestions && !this.state.displayRight && this.state.displayWrong) {
        return(
            <div className="quizzContainer">
                <p className="quizzQuestion">{this.props.question}</p>
                <p className="badAnswerTitle">Mauvaise réponse...</p>
                <p className="answerText">le loup chasse en particulier le {this.props.goodAnswer}</p>
                <img src={this.props.image}></img>
            </div> 
        )
    } else {
        return(
            <div className="quizzContainer">
                <p className="quizzQuestion">{this.props.question}</p>
                <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.badAnswer[0]} ref={this.inputRef} autoFocus/>
                <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.badAnswer[1]} ref={this.inputRef} autoFocus />
                <input onClick={this.checkAnswer} className="quizzAnswer" type="submit" value={this.props.goodAnswer} ref={this.inputRef} autoFocus/>
                <img src={this.props.image}/>
            </div> 
         )
    }
     
        
     }
}

export default QuizzContainer;