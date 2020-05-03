import React from 'react';

import { Container } from 'semantic-ui-react';

import { Header } from 'components';
import map from '../../images/map.png';
import styles from './styles.module.css';

export default class Map extends React.Component {
render() {
return (
<>
  <Header />
  <div className={styles.flexContainer}>
    <img src={map} alt="map"/>
  </div>
</>
);
}
}

