import React from 'react';

import './TrafficLight.css';

function TrafficLight() {
  return (
    <div className="container">
      <div className="light red" />
      <div className="light amber" />
      <div className="light green" />
    </div>
  )
}

export default TrafficLight;