import React from 'react';

const Home = (props) => (
  

    <div>
        <video src={props.videoOptions.src} type="video/mp4" className="anim">
        </video>
        <button onClick={props.skipVideo}> Skip</button>
    </div>
);

export default Home;
