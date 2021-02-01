import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import style from './Map.module.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const [zoom, setZoom] = useState(11);
  return (
    <div className={style.container}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>
  )
}
