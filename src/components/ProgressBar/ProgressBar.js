import './progressBar.scss';

import React from 'react';

const progressBar = ({ progress }) => {
  const Parentdiv = {
    height: 4,
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#4B9CE2',
    borderRadius: 20,
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <>
      <div className="progressBarContainer">
        <h4>{`${progress}%`}</h4>
        <div style={Parentdiv}>
          <div style={Childdiv} />
          <span style={progresstext} />
        </div>
      </div>
    </>
  );
};

export default progressBar;
