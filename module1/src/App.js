import React, {useEffect, useState} from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';

function App() {
  const [trafficLights, setTrafficLights] = useState([]);

  function parseData(data) {    
    data.forEach(d => {
      const fields = d.fields;
      setTrafficLights(prevState => ([
        ...prevState,
        {
          trafficLightColors: [fields.top_light_color, fields.middle_light_color, fields.bottom_light_color],
          containerColor: fields.container_color,
          lightDurations: [fields.top_light_duration, fields.middle_light_duration, fields.bottom_light_duration],
          location: fields.location
        }
      ]))
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/traffic/')
    .then(response => response.json())
    .then(data => parseData(data))
  }, [])

  return (
    <div style={{display: 'flex'}}>
      {trafficLights.map(trafficLight => (
        <TrafficLight 
          containerColor={trafficLight.containerColor}
          trafficLightColors={trafficLight.trafficLightColors}
          location={trafficLight.location} />
      ))}
    </div>
  );
}

export default App;
