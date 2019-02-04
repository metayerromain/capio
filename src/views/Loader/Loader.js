import React from 'react';

const Loader = (props) => (
  
    <div id="Loading">
        <div id="bgLoading"></div>
        <p className="percentage">{props.numLoad}%</p>
    </div>
  
);

export default Loader;