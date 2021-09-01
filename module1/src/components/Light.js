import React, { useEffect, useState } from 'react';

import './Light.css';

function Light(props) {
  const { color } = props;
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prevUptime => prevUptime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className={`light ${color}`}> {uptime} </div>
  )
}

export default Light;
