import React, { useEffect, useState } from 'react'
import TrafficLightContainer from './TrafficLightContainer'
import Light from './Light'

const DEFAULT_TRAFFIC_LIGHT_COLORS = ['red', 'amber', 'green']

function TrafficLight({
  location="Unknown location",
  containerColor="black", 
  trafficLightColors=DEFAULT_TRAFFIC_LIGHT_COLORS
}) {
  const [currentLight, setCurrentLight] = useState(trafficLightColors[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight(currentLight => {
        const nextIndex = trafficLightColors.indexOf(currentLight) + 1;
        return trafficLightColors[nextIndex % 3];
      })
    }, 3000)

    return () => {
      clearInterval(interval);
    }
  }, [trafficLightColors])

  return (
    <div>
      <TrafficLightContainer containerColor={containerColor}>
        {trafficLightColors.map((color) => (
          <Light color={color === currentLight ? color : 'gray'} key={color} />
        ))}
      </TrafficLightContainer>
      <span style={{textAlign: 'center'}}>{location}</span>
    </div>
  )
}

export default TrafficLight
