
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
import styles from './styles.module.css';


const PinnedPlace = ({ text }) => {
  return (
    <div>
      <Icon name="map marker alternate" size="big" color="blue" />
      {text}
    </div>
  )
}

class MapContainer extends React.Component {

  static defaultProps = {
    center: {
      lat: 42.698334,
      lng: 23.319941
    },
    zoom: 14,

  };

  render() {
    const { homeSelected, uniSelected, officeSelected } = this.props;
    const uniAddr = {
      lat: 42.6743677,
      lng: 23.3282965
    };
    const homeAddr = {
      lat: 42.6774917,
      lng: 23.3085355
    };
    const officeAddr = {
      lat: 42.6835888,
      lng: 23.3137395
    };

    let currentCenter = this.props.center;
    if (homeSelected) {
      currentCenter = homeAddr;
    } else if (uniSelected) {
      currentCenter = uniAddr;
    } else if (officeSelected) {
      currentCenter = officeAddr;
    }

    return (
      <div className={styles.mapStyle}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTAR3vktkmgiq934W4os89KkfI3tsLaKk' }}
          center={currentCenter}
          defaultZoom={this.props.zoom}
        >
          {uniSelected &&
            <PinnedPlace
              {...uniAddr}
              text="University"
            />
          }
          {homeSelected &&
            <PinnedPlace
              {...homeAddr}
              text="Home"
            />
          }
          {officeSelected &&
            <PinnedPlace
              {...officeAddr}
              text="Office"
            />
          }
        </GoogleMapReact>
      </div>
    );
  }
}


export default MapContainer;


