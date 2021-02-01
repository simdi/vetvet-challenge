import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import { AppContext } from '../../../App';

import style from './Map.module.css';
 
export class MapContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className={style.container}>
        <Map google={this.props.google} zoom={14}>
          {
            
          }
          <Marker
            onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 37.778519, lng: -122.405640}}
          />
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>place</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)
