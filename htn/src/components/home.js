import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { navStyles } from './styles';

function Home() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  return (
    <div id="outer-container">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={navStyles}
        isOpen={false}
      >
        <p>cacheXplore</p>
        <a id="home" className="nav-button" href="/">Home</a>
        <a id="about" className="nav-button" href="/about">About</a>
        <a id="contact" className="nav-button" href="/contact">Contact</a>
      </Menu>
      <main id="page-wrap" className="main-page">
        <h1> 
          cacheXplore
        </h1>
        <p>
          {lat} {lon}
        </p>
      </main>
    </div>
  );
}

export default Home;