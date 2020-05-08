
import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import AddFilter from 'components/AddFilter';

class SearchPanel extends React.Component {
render() {
  return (
    <div className={styles.searchPanel}>
      <div className={styles.searchBar}>
         <svg class="bi bi-search" className={styles.searchIcon} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
        </svg>
        <input type="text" className={styles.searchInput} placeholder="Search"></input>
      </div>
      <div className={styles.searchButtons}>
        <button className={`${styles.dotsButton} ${styles.fc1}`}>See all spots</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>3 min.</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>5 min.</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>10 min.</button>
      </div>
      <div className={styles.searchButtons}>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>Home</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>Univesity</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>Office</button>
        <button className={`${styles.parkingButton} ${styles.fc1}`}>Fitness</button>
      </div>

      <AddFilter></AddFilter>

      <div className={styles.placesCards}>
        <button className={styles.placeCard}>Restaurant<p>430places</p></button>
        <button className={styles.placeCard}>Coffee<p>380places</p></button>
        <button className={styles.placeCard}>Cinema<p>15places</p></button>
      </div>

      <div className={styles.favourites}>
        <h5>Favourites</h5>
        <div className={styles.favouriteButtons}>
          <button className={styles.faveButton}>Home<div><p>g.k. Ivan Vazov</p><p>7.3 km</p></div></button>
          <button className={styles.faveButton}>University<div><p>bul. James Boucher 5</p><p>0 km</p></div></button>
          <button className={styles.faveButton}>Office<div><p>bul. Vitosha 87</p><p>2.4 km</p></div></button>
        </div>
      </div>


       {/* TODO */}
      <button className={styles.pay}>Pay for place</button>

    </div>

);
}
}

export default SearchPanel;
