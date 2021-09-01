import React from 'react';

import './TrafficLightContainer.css';

function TrafficLightContainer({children}) {
  return <div className="container">{children}</div>
}

export default TrafficLightContainer;