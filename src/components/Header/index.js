import React from 'react';

import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import logo from '../../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.navigationHeader}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Link to="/" className={styles.navTitle}> ParkIt </Link>
      </div>
    );
  }
}

export default Header;
