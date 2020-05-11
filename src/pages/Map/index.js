import React from 'react';

import { Header } from 'components';
import styles from './styles.module.css';
import SearchPanel from 'components/SearchPanel';
import MapContainer from 'components/MapContainer';

export default class Map extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div className={styles.flexContainer}>
          {/* <img src={map} alt="map"/> */}
          <MapContainer className={styles.responsiveMap} />
          <div className={styles.manageMap}>
            <SearchPanel></SearchPanel>
          </div>
        </div>
      </>
    );
  }
}