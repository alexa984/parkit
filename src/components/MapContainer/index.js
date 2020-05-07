
import React from 'react';

import styles from './styles.module.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
  
class MapContainer extends React.Component {
  
  static defaultProps = {
    center: {
      lat: 42.698334,
      lng: 23.319941
    },
    zoom: 14,

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTAR3vktkmgiq934W4os89KkfI3tsLaKk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.698334}
            lng={23.319941}
            text="My Marker"

          />
        </GoogleMapReact>
      </div>
    );
  }
}

 
export default MapContainer;


