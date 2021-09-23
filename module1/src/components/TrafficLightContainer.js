import React from 'react';

import './TrafficLightContainer.css';

function TrafficLightContainer({containerColor, children}) {
  return <div className="container" style={{backgroundColor: containerColor}}>{children}</div>
}

export default TrafficLightContainer;