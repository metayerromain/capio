import React from 'react';

const Quizz = (props) => (
  
    <div id="Al2" className="section grain">
        <div className="container">
            <div className="row pt-xl pt-down-0">
                <QuizzContainer  question={'À ton avis, que chassent les loups ?'}
                goodAnswer={'wapitis'}
                badAnswer={['ours','canards']}
                image={'/images/loup_small_thumbnail.svg'} /> 
            </div>
        </div>
    </div>

);

export default Quizz;
