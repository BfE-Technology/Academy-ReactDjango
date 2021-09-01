import React from 'react';
import TrafficLightContainer from './TrafficLightContainer';
import Light from './Light';

import './TrafficLight.css';

const TRAFFIC_LIGHT_COLORS = ["red", "amber", "green"];

function TrafficLight() {
  return (
    <TrafficLightContainer>
      {TRAFFIC_LIGHT_COLORS.map((color) => <Light color={color} key={color} />)}
    </TrafficLightContainer>
  )
}

export default TrafficLight;