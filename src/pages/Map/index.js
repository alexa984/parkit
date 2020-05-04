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
    <div className={styles.searchPanel}>
      
        <svg class="bi bi-search" className={styles.searchIcon} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
        </svg>
        <input type="text" className={styles.searchInput} placeholder="Search"></input>
    </div>
     
    <div className={styles.searchButtons}>
      <button className={styles.searchButton}></button>
      <button className={styles.searchButton}></button>
      <button className={styles.searchButton}></button>
      <button className={styles.searchButton}></button>
    </div>
    </div>
</>
);
}
}

