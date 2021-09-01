import React, { useEffect, useState } from 'react'
import TrafficLightContainer from './TrafficLightContainer'
import Light from './Light'

const TRAFFIC_LIGHT_COLORS = ['red', 'amber', 'green']

function TrafficLight() {
  const [currentLight, setCurrentLight] = useState(TRAFFIC_LIGHT_COLORS[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight(currentLight => {
        const nextIndex = TRAFFIC_LIGHT_COLORS.indexOf(currentLight) + 1;
        return TRAFFIC_LIGHT_COLORS[nextIndex % 3];
      })
    }, 3000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <TrafficLightContainer>
      {TRAFFIC_LIGHT_COLORS.map((color) => (
        <Light color={color === currentLight ? color : 'gray'} key={color} />
      ))}
    </TrafficLightContainer>
  )
}

export default TrafficLight
