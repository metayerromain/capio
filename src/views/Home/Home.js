import React from 'react';
import Load from '../Loader/LoaderContainer';
import Skip from '../../assets/Picto/right-arrow-3.svg';
import HeadPhone from '../../assets/Picto/headphones.svg';
import Poster from '../../assets/img/poster.png';

const Home = (props) => (
    <section id="home">
        <Load />
        
        <button onClick={props.skipVideo} className="buttonSkip">
            <p>Passez la vidéo</p>
            <img src={Skip} alt="Skip"></img>
        </button>

        <div id="introVideo">
            <img className="iconSound" src={HeadPhone} alt="HeadPhone"></img>
            <p>Pour un meilleur confort de lecture, veuillez porter un casque</p>
            <button onClick={props.startVideo} className="buttonStart">Commencer</button>
        </div>
        
        <video 
            src={props.videoOptions.src}
            poster={Poster}
            type="video/mp4" id="video"
            className="anim"
            onEnded={props.endVideo}>
        </video>
    </section>
);

export default Home;
