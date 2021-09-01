import React from 'react';

import './Light.css';

function Light(props) {
  const { color } = props;

  return (
    <div className={`light ${color}`} />
  )
}

export default Light;
