import React from 'react';

import { Link } from 'react-router-dom';
import styles from './styles.module.css'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.navigationHeader}>
        <Link to="/" className={styles.navTitle}> ParkIt </Link>
      </div>
    );
  }
}

export default Header;
