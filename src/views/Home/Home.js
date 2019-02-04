import React, { Component } from 'react';
import Load from '../Loader/LoaderContainer';

const Home = (props) => (
    <section id="home">
        <Load />
        <video src="../../video/final_wolves.mp4" type="video/mp4" className="anim" onClick={props.clickVideo} autoPlay>
        </video>
    </section>
);

export default Home;
